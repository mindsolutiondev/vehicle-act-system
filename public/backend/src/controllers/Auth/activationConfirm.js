const humps = require('humps')
const config = require('../../config/activation')
const originalFs = require('original-fs')
var replace = require('lodash.replace')
var fs = require('fs')
var path = require('path')

module.exports = async (req, res) => {  
  try {
    let activation = JSON.stringify(originalFs.readFileSync(`${path.resolve(__dirname,'../../config/activation.json')}`))
    originalFs.writeFileSync(`${path.resolve(__dirname,'../../config/activation.json')}`, replace(activation, false, true), 'utf-8')
    res.send({
      status: 'success',
      text: activation
    })
  } catch (error) {
    res.send({
      status: 'error',
      message: error
    })
  }
}
