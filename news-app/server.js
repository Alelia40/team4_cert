//require('dotenv').config()
const http = require('http')
const app = require('./backend/app');

// //const PORT = process.env.PORT

const server = http.createServer(app)

server.listen(3000, () => console.log('Node server Server Started on PORT ' + 3000))

