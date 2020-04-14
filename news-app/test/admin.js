process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Admin = require('../backend/models/Admin');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Admin', () => {
    beforeEach((done) => {
        Admin.remove({}, (err) => { 
           done();           
        });        
    });
  describe('/GET admin', () => {
      it('it should GET all the admin', (done) => {
            chai.request(server)
            .get('/admin')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST admin', () => {
      it('it should not POST a admin without password field', (done) => {
          let admin = {
              name: "admin123",
              email: "a123@gmail.com"
          }
            chai.request(server)
            .post('/admin')
            .send(admin)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('password');
                  res.body.errors.password.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST a admin ', (done) => {
          let admin = {
              name: "admin123",
              email: "a123@gmail.com",
              password: "password"
          }
            chai.request(server)
            .post('/admin')
            .send(admin)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Admin successfully added!');
                  res.body.admin.should.have.property('name');
                  res.body.admin.should.have.property('email');
                  res.body.admin.should.have.property('password');
              done();
            });
      });
  });
  describe('/GET/:id admin', () => {
      it('it should GET a admin by the given id', (done) => {
          let admin = new Admin({ name: "admin123", email: "a123@gmail.com", password: "password" });
          admin.save((err, admin) => {
              chai.request(server)
            .get('/admin/' + admin.id)
            .send(admin)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('name');
                  res.body.should.have.property('email');
                  res.body.should.have.property('password');
                  res.body.should.have.property('_id').eql(admin.id);
              done();
            });
          });

      });
  });
  describe('/PUT/:id admin', () => {
      it('it should UPDATE a admin given the id', (done) => {
          let admin = new Admin({ name: "admin321", email: "a321@gmail.com", password: "password" })
          admin.save((err, admin) => {
                chai.request(server)
                .put('/admin/' + admin.id)
                .send({ name: "admin321", email: "a321@gmail.com", password: "wordpass" })
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('Admin updated!');
                      res.body.admin.should.have.property('password').eql("wordpass");
                  done();
                });
          });
      });
  });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id admin', () => {
      it('it should DELETE a admin given the id', (done) => {
          let admin = new Admin({ name: "admin321", email: "a321@gmail.com", password: "password" })
          admin.save((err, admin) => {
                chai.request(server)
                .delete('/admin/' + admin.id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('Admin successfully deleted!');
                      res.body.result.should.have.property('ok').eql(1);
                      res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});
