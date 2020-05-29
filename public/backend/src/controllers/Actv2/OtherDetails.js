const humps = require("humps");
const { OtherDetails } = require("../../services/Actv2");

module.exports = async (req, res) => {
  let { params, body } = req;

  let message = await OtherDetails(params.id, body)
  res.send({
    success: true,
    ...message
  });
};
