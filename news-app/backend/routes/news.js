let mongoose = require('mongoose');
let News = require('../models/News');

/*
 * GET /news route to retrieve all the news.
 */
function getNews(req, res) {
    //Query the DB and if no errors, send all the news
    let query = News.find({});
    query.exec((err, news) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(news);
    });
}

/*
 * POST /news to save a new news.
 */
function postNews(req, res) {
    //Creates a new news
    var newNews = new News(req.body);
    //Save it into the DB.
    newNews.save((err,news) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "News successfully added!", news });
        }
    });
}

/*
 * GET /news/:id route to retrieve a news given its id.
 */
function getOneNews(req, res) {
    News.findById(req.params.id, (err, news) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(news);
    });        
}

/*
 * DELETE /news/:id to delete a news given its id.
 */
function deleteNews(req, res) {
    News.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "News successfully deleted!", result });
    });
}

/*
 * PUT /news/:id to updatea a news given its id
 */
function updateNews(req, res) {
    News.findById({_id: req.params.id}, (err, news) => {
        if(err) res.send(err);
        Object.assign(news, req.body).save((err, news) => {
            if(err) res.send(err);
            res.json({ message: 'News updated!', news });
        });    
    });
}

//export all the functions
module.exports = { getNews, postNews, getOneNews, deleteNews, updateNews };
