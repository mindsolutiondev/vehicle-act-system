const humps = require('humps')
const { createAct } = require('../../services/Actv2')

module.exports = async (req, res) => {
  let id = await createAct()
  res.send({
    actId: id,
    success: true
  })
}