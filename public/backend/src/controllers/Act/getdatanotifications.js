const { getdatanotifications } = require('../../services/Act')

module.exports = async (req, res) => {
  let { filter } = req.query
  let getdatanotificationsResult = await getdatanotifications(filter)
  res.send({
    success: true,
    data: getdatanotificationsResult 
  })
}