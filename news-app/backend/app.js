const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')

const adminRoutes = require('./routes/admin')
const newsRoutes = require('../backend/routes/news')
//const uiRoutes = require('./routes/ui')

mongoose.connect('mongodb://localhost:27018/news',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("DB Connected"))

const app = express()

//app.use(cors())
//app.options('https://localhost:4200', cors())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// app.use(cors)
app.use(logger('dev'))


let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

app.set('view engine', 'ejs')

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

// app.get('/', (req, res) => {
//   //const news = newsList;
//   res.render('../backend/views/newsList')
// })
app.use('/admin', adminRoutes)
app.use('/news', newsRoutes)

io.on('connection', (socket) => {
  //console.log('user connected');

  socket.on('msg', (message) =>{
    io.emit("Chat Message", message);
  });
});

module.exports = app
