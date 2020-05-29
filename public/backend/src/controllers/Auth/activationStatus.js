const humps = require('humps')
let fs = require('fs')
let path = require('path')
module.exports = async (req, res) => {    
  let data = JSON.parse(fs.readFileSync(`${path.resolve(__dirname,'../../config/activation.json')}`, 'utf-8'))
  res.send({ ...data })
}
