const humps = require('humps')
const { createActType } = require('../../services/Act')

module.exports = async (req, res) => {
  let payload = humps.camelizeKeys(req.body)
  let createActResult = await createActType(payload)
  res.send({
    success: true,
    createActResult
  })
}