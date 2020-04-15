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

/*
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);
*/

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

/*
io.on('connection', (socket) => {
  //console.log('user connected');
  socket.on('msg', (message) =>{
    io.emit("Chat Message", message);
  });
});
*/

module.exports = app
