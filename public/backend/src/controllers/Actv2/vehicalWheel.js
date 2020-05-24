const humps = require("humps");
const { vehicalWheel } = require("../../services/Actv2");

module.exports = async (req, res) => {
  let { params, body } = req;

  const message = await vehicalWheel(params.id, body)
  res.send({
    // actId: id,
    success: true,
    ...message
  });
};
