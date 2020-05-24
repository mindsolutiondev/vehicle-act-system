const { getdatanotifications } = require('../../services/Act')

module.exports = async (req, res) => {
  let getdatanotificationsResult = await getdatanotifications()
  res.send({
    success: true,
    data: getdatanotificationsResult 
  })
}