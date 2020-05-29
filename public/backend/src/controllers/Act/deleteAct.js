const humps = require('humps')
const { deleteAct } = require('../../services/Act')

module.exports = async (req, res) => {
  let payload = humps.camelizeKeys(req.params.id)
  let delActResult = await deleteAct(payload)
  res.send({
    success: true,
    delActResult
  })
}