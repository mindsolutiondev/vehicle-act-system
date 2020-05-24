const model = require("../../repositories");
const _get = require("lodash.get");
module.exports = async function (id, payload) {

  if (_get(payload, "engineOil", false)) {
    await model.EngineOil.updateOne({ actId: id }, payload.engineOil);
  }
  if (_get(payload, "gearOil", false)) {
    await model.GearOil.updateOne({ actId: id }, payload.gearOil);
  }
  if (_get(payload, "greaseWheelOil", false)) {
    await model.GreaseWheelOil.updateOne({ actId: id }, payload.greaseWheelOil);
  }
  if (_get(payload, "rearGearOil", false)) {
    await model.RearGearOil.updateOne({ actId: id }, payload.rearGearOil);
  }
  return {
    message: "no data to update",
  };
};
