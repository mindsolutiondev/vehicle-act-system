const jwt = require('jsonwebtoken')
const httpError = require('../utils/httpError')

module.exports = function (req, res, next) {
  // skip case login
  if (req.url !== '/api/v1/chkaccount' && req.url !== '/api/v1/activation/generator' && req.url !== '/api/v1/activation' ) {
    if (req.headers.authorization) {
      let authHeader = req.headers.authorization.split(' ')[1]
      let decoded = jwt.decode(authHeader)
      req.auth = {
        userId: decoded.userid
      }
      next()
    } else {
      throw httpError(402, 'Unauthorize')
    }
  } else {
    next()
  }
}
