const express = require('express')
const router = express.Router()

//const Admin = require('../models/Admin')
// const News = require('../models/News')

// router.get('/getnews', (req, res) => {
//     //res.send("Jonaed")
//     News.find().then((result) => {
//         res.json(result)
//     }).catch(err => res.sendStatus(403).send(err))
// })
// router.get('/getnews', (req, res) => {
//     //res.send("Jonaed")
//     News.find().then((result) => {
//         res.json(result)
//     }).catch(err => res.sendStatus(403).send(err))
// })
// router.get('/getnews/:category', (req, res) => {
//     const category = req.params.category

//     News.find({ category }).then((result) => {
//         console.log(result)
//         res.json(result)
//     }).catch(err => res.sendStatus(403).send(err))
// })
// router.get('/getnews/id/:id', (req, res) => {
//     const id = req.params.id

//     News.find({ _id: id }).then((result) => {
//         res.json(result)
//     }).catch(err => res.sendStatus(403).send("Getting error!"))
// })