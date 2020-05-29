const { updateAct } = require('../../services/Act')

module.exports = async (req, res) => {
  let updateActResult = await updateAct(req)
  res.send({
    success: true,
    updateActResult
  })
}