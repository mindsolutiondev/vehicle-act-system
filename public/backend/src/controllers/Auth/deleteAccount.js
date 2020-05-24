const humps = require('humps')
const { deleteAccount } = require('../../services/Auth')

module.exports = async (req, res) => {
  let payload = humps.camelizeKeys(req.params.id)
  let deleteAccountResult = await deleteAccount(payload)
  res.send({
    success: true,
    deleteAccountResult
  })
}