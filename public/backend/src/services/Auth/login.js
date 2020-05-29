const model = require('../../repositories')
const crypto = require('crypto')
const moment = require('moment')
const jwt = require('jsonwebtoken')
const httpError = require('../../utils/httpError')
const secret = require('../../config/secret.js')
module.exports = async function (payload) {
    let token = jwt.sign({
      user_id: payload.username
    }, secret.sercetkey, {
      expiresIn: '360 days'
    })
    return token
}