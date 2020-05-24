const model = require("../../repositories");
const _get = require("lodash.get");
module.exports = async function (payload) {
  let LogWheelDetail = await model.LogWheelDetail.create({
    wheelId: payload.wheelId,
    actId: payload.actId,
    name: payload.name,
    serialNumber: payload.serialNumber,
    typeWheel: payload.typeWheel,
    note: payload.note,
    date: payload.date
  });
};
