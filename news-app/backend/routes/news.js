const express = require('express')
const router = express.Router()

//const auth = require('../middlewares/authorization')
const News = require('../models/News')

//router.use(auth)

router.get('/home', (req, res) => {
    News.find()
        .then(result => {
            console.log(result)
            data = {
                newsList: result
            }
            res.render('../backend/views/newsList', data)
        })
           // res.json(tasks))
        .catch(err => res.status(400).json(err))
    
})


router.get('/form', (req, res) => {
    res.render('../backend/views/postNews')
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    News.findById(id)
        .then(news => {
            if (news) {
                console.log(news)
                data = {
                    newsItem: news
                }
                res.render('../backend/views/editNews', data)
            } else {
                res.status(404).json({
                    msg: 'News Not Found'
                })
            }
        })
        .catch(err => res.status(400).json(err))
})

// post handled in admin route
/* router.post('/', (req, res) => {
    const { title, description } = req.body

    const news = new News()

    task.title = title
    task.description = description

    news.save()
        .then(task => res.json(task))
        .catch(err => res.status(400).json(err))
}) */

router.use( function( req, res, next ) {
    // this middleware will call for each requested
    // and we checked for the requested query properties
    // if _method was existed
    // then we know, clients need to call DELETE request instead
    if ( req.query._method == 'DELETE' ) {
        // change the original METHOD
        // into DELETE method
        req.method = 'DELETE';
        // and set requested url to /user/12
        req.url = req.path;
    }       
    next(); 
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    News.findByIdAndRemove(id)
        .then(news => {
            console.log(news)
            res.redirect('/news/home')
        })
        .catch(err => res.status(400).json(err))
})

// put not used
router.put('edit/:id', (req, res) => {
    res.send('PUT /tasks?:id Works!')
})

router.patch('/edit/:id', (req, res) => {
    const { id } = req.params
    const { title, description, url, imageUrl, category, date } = req.body

    News.findById(id)
        .then(news => {
            news.title = title
            news.description = description
            news.URL = url
            news.imageURL = imageUrl
            news.category = category
            news.date = date

            return news.save()
        })
        .then(updatedNews => {
            console.log(updatedNews)
            res.redirect('/news/home')
        })
        .catch(err => res.status(400).json(err))
})

module.exports = router
