const { getAccountById } = require('../../services/Auth')

module.exports = async (req, res) => {
  let getAccountByIdResult = await getAccountById(req)
  res.send({
    success: true,
    getAccountByIdResult: { ...getAccountByIdResult }
  })
}