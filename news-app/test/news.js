process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let News = require('../backend/models/News');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('News', () => {
    beforeEach((done) => {
        News.remove({}, (err) => { 
           done();           
        });        
    });
  describe('/GET news', () => {
      it('it should GET all the news', (done) => {
            chai.request(server)
            .get('/news')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST news', () => {
      it('it should not POST a news without description field', (done) => {
          let news = {
              title: "Biden 46th POTUS"
          }
            chai.request(server)
            .post('/news')
            .send(news)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('description');
                  res.body.errors.description.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST a news ', (done) => {
          let news = {
              title: "Biden 46th POTUS",
              description: "Not Bernie but we'll take it"
          }
            chai.request(server)
            .post('/news')
            .send(news)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('News successfully added!');
                  res.body.news.should.have.property('title');
                  res.body.news.should.have.property('description');
              done();
            });
      });
  });
  describe('/GET/:id news', () => {
      it('it should GET a news by the given id', (done) => {
          let news = new News({ title: "Biden 46th POTUS", description: "Not Bernie but we'll take it" });
          news.save((err, news) => {
              chai.request(server)
            .get('/news/' + news.id)
            .send(news)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('description');
                  res.body.should.have.property('_id').eql(news.id);
              done();
            });
          });

      });
  });
  describe('/PUT/:id news', () => {
      it('it should UPDATE a news given the id', (done) => {
          let news = new News({title: "Bernie Elected VP", description: "A man can dream"})
          news.save((err, news) => {
                chai.request(server)
                .put('/news/' + news.id)
                .send({title: "Bernie Elected VP", description: "Next best scenario"})
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('News updated!');
                      res.body.news.should.have.property('description').eql("Next best scenario");
                  done();
                });
          });
      });
  });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id news', () => {
      it('it should DELETE a news given the id', (done) => {
          let news = new News({title: "Bernie Elected VP", description:"A man can dream"})
          news.save((err, news) => {
                chai.request(server)
                .delete('/news/' + news.id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('News successfully deleted!');
                      res.body.result.should.have.property('ok').eql(1);
                      res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});
