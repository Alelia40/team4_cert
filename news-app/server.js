//require('dotenv').config()

const http = require('http')
const app = require('./backend/app')

const PORT = 3000

const server = http.createServer(app)

server.listen(PORT, () => console.log('Server Started on PORT ' + PORT))