const express = require('express')
const methodOverride = require('method-override')
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

// app.get('/', (req, res) => {
//   //const news = newsList;
//   res.render('../backend/views/newsList')
// })
app.use('/admin', adminRoutes)
app.use('/news', newsRoutes)

module.exports = app
