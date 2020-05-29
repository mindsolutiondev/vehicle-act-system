const mongoose = require('mongoose')
const { getWheel } = require("../../services/Actv2");

module.exports = async (req, res) => {
  let { id } = req.params;
  let { wheelname, position } = req.query;
  const data = await getWheel(id, wheelname, position);

  res.send({
    success: true,
    ...data
  });
};
