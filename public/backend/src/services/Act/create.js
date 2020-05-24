const model = require('../../repositories')
const checkDateExpired = require('../../libs/checkDateExpired')

module.exports = async function (payload) {
  try{
   let createAct = model.Act.create(payload)

   return createAct.then(async (a) => {
      let getAct = await model.Act.find({})
      let createActResult = getAct.map((value,index) => {
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
      return createActResult
   })
  } catch (error) {
    throw error
  }
}
