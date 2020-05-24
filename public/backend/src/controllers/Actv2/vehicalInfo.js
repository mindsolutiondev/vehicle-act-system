const humps = require("humps");
const { vehicalInfo } = require("../../services/Actv2");

module.exports = async (req, res) => {
  let { params, body } = req;

  await vehicalInfo(params.id, body)
  res.send({
    // actId: id,
    success: true,
  });
};
