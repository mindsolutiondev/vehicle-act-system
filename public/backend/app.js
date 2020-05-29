const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const routeConfig = require('./src/config/routes')
const catchAsyncErrors = require('./src/utils/catchAsyncErrors')
const socket = require('socket.io')
const { requestMiddleware, errorExceptionMiddleware, logMiddleware } = require('./src/middlewares')
const cors = require('cors')
const configDb = require('./src/config/database') 
const mongoose = require('mongoose')
const app = express()
let startAt = '' 

app.use(bodyParser.urlencoded({limit: '80mb',extended: true}))
app.use(cors())
// use body parser
app.use(bodyParser.json({
  type: '*/*',
  limit: '80mb'
}))
app.use(express.urlencoded({extended: false}))
// handling request (extract or check param before pass to controller)
app.use(requestMiddleware)

// log middleware using morgan
app.use(logMiddleware)


// server status
app.get('/', function (req, res) {
  let current = new Date()
  let uptime = Math.abs(current - startAt) / 36e5
  let server = {
    started: startAt,
    uptime: uptime,
    status: 'OK'
  }
  res.send(server)
})

// generating API route
Object.keys(routeConfig).forEach((key, index) => {
  routeConfig[key].forEach((route) => {
    const {methods, path, controller} = route
    router[methods.toLowerCase()](`/${key}${path}`, catchAsyncErrors(controller))
  })
})
app.use('/api', router)

// catch application error then managing response
app.use(errorExceptionMiddleware)

mongoose.connect(configDb.connectDB,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
},function(error){
    if(error){
      console.log(error);
    }
}
);

// start server at specific port

const port = process.env.PORT || 8021
let server = app.listen(port, () => {
  startAt = new Date()
  console.log(`app listening on port ${port}`)
})

require('./src/libs/socket')(socket,server)
require('./src/seeders/user')
module.exports = app 