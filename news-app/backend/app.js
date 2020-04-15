const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')

const News = require('./models/News')

const adminRoutes = require('./routes/admin')
const newsRoutes = require('../backend/routes/news')
//const apiRoutes = require('./routes/api')

mongoose.connect('mongodb://localhost:27018/news',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("DB Connected"))

const app = express()

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))

app.use(cors())
// app.use(cors)
app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

//Login
app.get('/', (req, res) => {
  //const news = newsList;
  res.render('../backend/views/login')
})
app.get('/getnews', (req,res)=>{
  //res.send("Jonaed")
  News.find().then((result) => {
    res.json(result)
  }).catch(err => res.sendStatus(403).send(err))
})
app.get('/getnews/:category', (req, res) => {
  const category = req.params.category
  
  News.find({category}).then((result) => {
    console.log(result)
    res.json(result)
  }).catch(err => res.sendStatus(403).send(err))
})
app.get('/getnews/id/:id', (req, res) => {
  const id = req.params.id

  News.find({ _id: id }).then((result) => {
    res.json(result)
  }).catch(err => res.sendStatus(403).send("Getting error!"))
})

app.use('/admin', adminRoutes)
app.use('/news', newsRoutes)
//app.use('/api', apiRoutes)

app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  res.header("Access-Control-Allow-Credentials",true);

  res.setHeader(

    "Access-Control-Allow-Headers",

    "Origin, X-Requested-With, Content-Type, Accept"

  );

  res.setHeader(

    "Access-Control-Allow-Methods",

    "GET, POST, PATCH, DELETE, OPTIONS"

  );

  next();

});

module.exports = app
