const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.send('Node server is working')
})


module.exports = app
