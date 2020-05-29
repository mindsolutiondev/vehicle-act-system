const humps = require('humps')
const { createAccount } = require('../../services/Auth')

module.exports = async (req, res) => {
  let payload = humps.camelizeKeys(req.body)
  let createAccountResult = await createAccount(payload)
  res.send({
    success: true,
    ...createAccountResult
  })
}