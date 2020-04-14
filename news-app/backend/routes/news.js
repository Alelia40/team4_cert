
const express = require('express')
const router = express.Router()

//const auth = require('../middlewares/authorization')
const News = require('../models/News')

//router.use(auth)

router.get('/', (req, res) => {
    News.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json(err))
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
