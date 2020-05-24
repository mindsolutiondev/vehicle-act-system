const model = require("../../repositories");
const moment = require('moment')
const mongoose = require("mongoose");
const _get = require("lodash.get");
module.exports = async function (id, payload) {
  let logic = {
    $and: [
      { actId: mongoose.Types.ObjectId(id) },
      { name: payload.name },
      { position: payload.position },
    ],
  };
  try {
    let updateWheelDetail = await model.WheelDetail.updateOne(logic, payload);
    if (_get(updateWheelDetail, "ok") === 1) {
      let resultCreate = await model.LogWheelDetail.create({ ...payload, date: moment(payload.date).format('YYYY-MM-DD')});
      return resultCreate !== null && { message: "update success" };
    } else {
      return {
        message: "can't create Log"
      }
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
