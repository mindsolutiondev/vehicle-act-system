const humps = require('humps')
const { LogWheelDetail } = require('../../services/Actv2')

module.exports = async (req, res) => {
  let {  body } = req;
  await LogWheelDetail(body);
  res.send({
    success: true,
  });
}