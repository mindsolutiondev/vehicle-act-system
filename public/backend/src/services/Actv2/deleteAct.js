const model = require("../../repositories");

module.exports = async function (payload) {
  try {
    await model.Act.deleteOne({ _id: payload })
    await model.EngineOil.deleteMany({ actId: payload })
    await model.GearOil.deleteMany({ actId: payload })
    await model.GreaseWheelOil.deleteMany({ actId: payload })
    await model.OtherDetails.deleteMany({ actId: payload })
    await model.WheelDetail.deleteMany({ actId: payload })
    await model.RearGearOil.deleteMany({ actId: payload })
  } catch (error) {
    throw new Error("Cannot Delete")
  }
};
