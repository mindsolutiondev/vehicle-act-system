const { getOtherVehicle } = require("../../services/Actv2");
// const mongoose = require("mongoose");

module.exports = async (req, res) => {
  let { id } = req.params;

  let data = await getOtherVehicle(id)
  res.send ({
    success: true,
    data: {...data}
  });
};
