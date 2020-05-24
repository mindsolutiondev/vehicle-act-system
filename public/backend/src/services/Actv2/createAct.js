const model = require("../../repositories");
const wheelPositionType = require("../../config/wheelPositionType");
const _get = require("lodash.get");
module.exports = async function (payload) {
  let Act = await model.Act.create({
    licensePlate:  "",
    vehicleType:  "",
    actExpireDate:  "",
    insureExpireDate:  "",
    distance: "",
    vehicalBook:  "",
    insureDocuments:  "",
    vehicleImg:  "",
    carmileage: "",
    datecarmileage: "",
    driverName: "",
    phone: "",
    brands: "",
    type: "",
    groupcar: "",
  });

  if (_get(Act, "_id", false)) {
    await model.EngineOil.create({
      actId: _get(Act, "_id", false),
      latestMileNumber: "",
      latestMileNumberDate: "",
      nextlatestMileNumber: "",
      typeOil: "",
      quantity: "",
      remainingDistance: "",
      spareparts: [],
    });

    await model.GearOil.create({
      actId: _get(Act, "_id", false),
      latestMileNumber: "",
      latestMileNumberDate: "",
      nextlatestMileNumber: "",
      typeOil: "",
      quantity: "",
      remainingDistance: "",
      spareparts: [],
    });

    await model.GreaseWheelOil.create({
      actId: _get(Act, "_id", false),
      latestMileNumber: "",
      latestMileNumberDate: "",
      nextlatestMileNumber: "",
      typeOil: "",
      quantity: "",
      remainingDistance: "",
      spareparts: [],
    });

    await model.RearGearOil.create({
      actId: _get(Act, "_id", false),
      latestMileNumber: "",
      latestMileNumberDate: "",
      nextlatestMileNumber: "",
      typeOil: "",
      quantity: "",
      remainingDistance: "",
      spareparts: [],
    });

    await model.OtherDetails.create({
      actId: _get(Act, "_id", false),
      details: "",
    });

    await wheelPositionType.wheelposition.map(async (val) => {
      await model.WheelDetail.create({
        actId: _get(Act, "_id", false),
        name: val.th,
        serialNumber: "",
        typeWheel: "",
        note: "",
        date: "",
        position: val.position,
      });
    });

    return _get(Act, "_id", false);
  }
};
