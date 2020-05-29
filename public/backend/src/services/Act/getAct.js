const model = require('../../repositories')
const checkDateExpired = require('../../libs/checkDateExpired')
module.exports = async function () {
  try{
    let getAllAct = await model.Act.find({})
    let getAll = getAllAct.map((value,index) => {
      let data = {
        key: index+1,
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
    return getAll
  } catch (error) {
    throw error
  }
}
