const humps = require('humps')
const { checkAccount } = require('../../services/Auth')

module.exports = async (req, res) => {
  let payload = humps.camelizeKeys(req.body)
  let checkAccountResult = await checkAccount(payload)
  res.send({
    success: true,
    checkAccountResult
  })
}