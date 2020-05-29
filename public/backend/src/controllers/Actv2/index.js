const create = require('./create')
const deleteById = require('./deleteById')
const updateGeneral = require('./updateGeneral')
const vehicalInfo = require('./vehicalInfo')
const vehicalWheel = require('./vehicalWheel')
const LogWheelDetail = require('./LogWheelDetail')
const OtherDetails = require('./OtherDetails')
const getAct = require('./getAct')
const getVehicleInfo = require('./getVehicleInfo')
const getWheel = require('./getWheel')
const getOtherVehicle = require('./GetOtherVehicle')
const uploadImage = require('./uploadImage')
const getCarType = require('./getCarType')
module.exports = {
  getAct,
  create,
  deleteById,
  updateGeneral,
  vehicalInfo,
  vehicalWheel,
  LogWheelDetail,
  OtherDetails,
  getVehicleInfo,
  getWheel,
  getOtherVehicle,
  uploadImage,
  getCarType
}
