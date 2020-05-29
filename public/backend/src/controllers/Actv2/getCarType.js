const { getCarType } = require('../../services/Actv2')

module.exports = async (req, res) => {
  const data = await getCarType()
  res.send({
    success: true,
    ...data
  })
}