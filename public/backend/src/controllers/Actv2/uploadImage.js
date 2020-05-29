const humps = require("humps");
const { uploadImage } = require("../../services/Actv2");

module.exports = async (req, res) => {
  let { params, body } = req;
  let data = await uploadImage(params.id, body);
  res.send({
    success: true,
    ...data
  });
};
