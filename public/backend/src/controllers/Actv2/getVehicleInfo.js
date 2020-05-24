const { getVehicleInfo } = require("../../services/Actv2");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
  let { id } = req.params;
  let isId = !!id ? { actId: mongoose.Types.ObjectId(id) } : {};
  let data = await getVehicleInfo(isId);

  res.send({
    success: true,
    data: data,
  });
};
