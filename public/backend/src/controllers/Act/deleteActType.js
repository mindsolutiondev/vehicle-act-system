const { deleteActType } = require('../../services/Act')
const humps = require('humps')

module.exports = async (req, res) => {
  let payload = humps.camelizeKeys(req.params.id)
  let delActResult = await deleteActType(payload)
  res.send({
    success: true,
    delActResult
  })
}