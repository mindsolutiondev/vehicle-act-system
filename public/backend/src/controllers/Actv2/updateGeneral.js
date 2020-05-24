const humps = require("humps");
const { updateGeneral } = require("../../services/Actv2");

module.exports = async (req, res) => {
  let { params, body } = req;
  await updateGeneral(params.id, body);
  res.send({
    // actId: id,
    success: true,
  });
};
