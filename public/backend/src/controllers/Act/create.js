const humps = require('humps')
const { create } = require('../../services/Act')

module.exports = async (req, res) => {
  let payload = humps.camelizeKeys(req.body)
  let createActResult = await create(payload)
  res.send({
    success: true,
    createActResult
  })
}