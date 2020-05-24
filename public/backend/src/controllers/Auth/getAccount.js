const { getAccount } = require('../../services/Auth')

module.exports = async (req, res) => {
  let getAccountResult = await getAccount()
  res.send({
    success: true,
    getAccountResult: { ...getAccountResult }
  })
}