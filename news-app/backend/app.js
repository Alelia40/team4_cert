const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')


app.get('/', (req,res)=>{
  res.render('../backend/views/login')
})


module.exports = app
