const humps = require("humps");
const { deleteAct } = require('../../services/Actv2')

module.exports = async (req, res) => {
  let { id } = req.params;
  await deleteAct(id)
  res.send({
    // actId: id,
    success: true,
  });
};
