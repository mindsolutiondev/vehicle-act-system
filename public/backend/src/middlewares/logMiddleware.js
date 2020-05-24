const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

var accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), { flags: 'a' })

module.exports = morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
},{ stream: accessLogStream })
