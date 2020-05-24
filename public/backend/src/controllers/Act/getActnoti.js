const { getActnoti } = require('../../services/Act')

module.exports = async (req, res) => {
  let ActnotiResult = await getActnoti()
  res.send({
    success: true,
    data: ActnotiResult 
  })
}
