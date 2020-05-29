const { updateAccount } = require('../../services/Auth')

module.exports = async (req, res) => {
  let updateAccountResult = await updateAccount(req)
  res.send({
    success: true,
    updateAccountResult
  })
}