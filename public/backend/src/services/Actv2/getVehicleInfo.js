const model = require("../../repositories");
const _ = require("lodash");

module.exports = async function (payload) {
  try {
    let EngineOil = await model.EngineOil.findOne(payload);
    let GearOil = await model.GearOil.findOne(payload);
    let GreaseWheel = await model.GreaseWheelOil.findOne(payload);
    let RearGearOil = await model.RearGearOil.findOne(payload);

    return {
      EngineOil,
      GearOil,
      GreaseWheel,
      RearGearOil,
    };
  } catch (err) {
    return {
      message: err.message,
    };
  }
};
