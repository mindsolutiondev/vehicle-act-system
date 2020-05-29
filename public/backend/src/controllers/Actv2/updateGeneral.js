const humps = require("humps");
const { updateGeneral } = require("../../services/Actv2");

module.exports = async (req, res) => {
  let { params, body } = req;
  let data = await updateGeneral(params.id, body);
  res.send({
    success: true,
    ...data
  });
};
