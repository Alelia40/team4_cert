newsList = [
    {
      "title" : "Election 2020",
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

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 3000;
let admin = require('./backend/routes/admin');
let news = require('./backend/routes/news');
let config = require('config'); //we load the db location from the JSON files
//db options
let options = { 
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
              }; 

//db connection      
mongoose.connect('mongodb://localhost:27018/newsapp', options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

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

app.route("/admin")
    .get(admin.getAdmins)
    .post(admin.postAdmin);
app.route("/admin/:id")
    .get(admin.getAdmin)
    .delete(admin.deleteAdmin)
    .put(admin.updateAdmin);

app.route("/news")
    .get(news.getNews)
    .post(news.postNews);
app.route("/news/:id")
    .get(news.getOneNews)
    .delete(news.deleteNews)
    .put(news.updateNews);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing