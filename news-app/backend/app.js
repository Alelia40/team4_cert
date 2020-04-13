newsList = [
  {
    "title" : "Election 2020",
    "description": "Berinie dropped out, Joe Baiden is the candidate from Democratic party",
    "published At": " 04/01/2020"
  },
  {
    "title": "Covid 19",
    "description": "Covid-19 is a SARS virus that weaken human's repiratory system. And kill human",
    "published At": " 04/01/2020"
  }
  ,
  {
    "title": "Bill-201020.1",
    "description": "The United States now have a full equipped space army. They declare a war with MARS",
    "published At": " 04/01/2020"
  }

]

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

  //const news = newsList;
  res.render('../backend/views/login')
})
app.get('/addNews', (req, res) => {

  //const news = newsList;
  res.render('../backend/views/postNews')
})
app.get('/newsList', (req,res)=>{

  res.render('../backend/views/newsList', newsList)
})


module.exports = app