newsList = [
    {
        "title": "Election 2020",
        "description": "Berinie dropped out, Joe Baiden is the candidate from Democratic party",
        "publishedAt": " 04/01/2020"
    },
    {
        "title": "Covid 19",
        "description": "Covid-19 is a SARS virus that weaken human's repiratory system. And kill human",
        "publishedAt": " 04/01/2020"
    }
    ,
    {
        "title": "Bill-201020.1",
        "description": "The United States now have a full equipped space army. They declare a war with MARS",
        "publishedAt": " 04/01/2020"
    }

]
const express = require('express')
const router = express.Router()

//const auth = require('../middlewares/authorization')
const News = require('../models/News')

//router.use(auth)

router.get('/home', (req, res) => {
    // News.find()
    //     .then(tasks => res.json(tasks))
    //     .catch(err => res.status(400).json(err))
    res.render('../backend/views/newsList', newsList)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    News.findById(id)
        .then(task => {
            if (task) {
                res.json(task)
            } else {
                res.status(404).json({
                    msg: 'Task Not Found'
                })
            }
        })
        .catch(err => res.status(400).json(err))
})

router.post('/', (req, res) => {
    const { title, description } = req.body

    const news = new News()

    task.title = title
    task.description = description

    news.save()
        .then(task => res.json(task))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    News.findByIdAndRemove(id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json(err))
})

router.put('/:id', (req, res) => {
    res.send('PUT /tasks?:id Works!')
})

router.patch('/:id/status', (req, res) => {
    const { id } = req.params

    News.findById(id)
        .then(task => { //task = new Task()
            task.completed = !task.completed
            return task.save()
        })
        .then(updatedTask => {
            res.json(updatedTask)
        })
        .catch(err => res.status(400).json(err))
})

module.exports = router
