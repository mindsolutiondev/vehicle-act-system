const { getAct } = require('../../services/Act')

module.exports = async (req, res) => {
  let ActResult = await getAct()
  res.send({
    success: true,
    data: [ ...ActResult ]
  })
}