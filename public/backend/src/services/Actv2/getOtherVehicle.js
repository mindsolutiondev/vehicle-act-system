const model = require("../../repositories");
const mongoose = require("mongoose");
const _ = require("lodash");

module.exports = async function (payload) {
  console.log(payload);
  try {
    let OtherDetails = await model.OtherDetails.findOne({
      actId: mongoose.Types.ObjectId(payload),
    }).lean();
    return {
      ..._.omit(OtherDetails, ["__v"]),
    };
  } catch (err) {
    return {
      message: err.message,
    };
  }
};
