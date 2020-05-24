const model = require('../../repositories')
const checkDateExpired = require('../../libs/checkDateExpired')

module.exports = async function (payload) {
  try {
    let id = payload;
    let getAct = await model.Act.findByIdAndDelete({ _id: id.trim() })
    let genActResult = await model.Act.find({})
    let results = genActResult.map((value, index) => {
      let data = {
        key: index + 1,
        id: value._id,
        licensePlate: value.licensePlate,
        vehicleType: value.vehicleType,
        actExpireDate: value.actExpireDate,
        insureExpireDate: value.insureExpireDate,
        distance: value.distance,
        vehicalBook: value.vehicalBook,
        insureDocuments: value.insureDocuments,
        vehicleImg: value.vehicleImg,
        ...checkDateExpired(value.actExpireDate) 
      }
      return data
    })
    return results
  } catch (err) {
    let genAct = await model.Act.find({})
    let getActResult = await model.Act.find({})
    let resultsAccount = getActResult.map((value) => {
      let data = {
        id: value._id,
        licensePlate: value.licensePlate,
        vehicleType: value.vehicleType,
        actExpireDate: value.actExpireDate,
        insureExpireDate: value.insureExpireDate,
        distance: value.distance,
        vehicalBook: value.vehicalBook,
        insureDocuments: value.insureDocuments,
        vehicleImg: value.vehicleImg,
        ...checkDateExpired(value.actExpireDate) 
      }
      return data
    })
    return resultsAccount
  }
}
