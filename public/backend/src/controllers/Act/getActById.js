const { getActById } = require('../../services/Act')

module.exports = async (req, res) => {
  let getActByIdResult = await getActById(req)
  res.send({
    success: true,
    getActByIdResult
  })
}