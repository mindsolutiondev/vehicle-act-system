const humps = require('humps')
const model = require('../../repositories')
const checkDateExpired = require('../../libs/checkDateExpired')

module.exports = async function (payload) {
  let  id  = humps.camelizeKeys(payload.params.id)
  let requestData = humps.camelizeKeys(payload.body)
   let dataUser = await model.Act.findOne({ _id: id })
    if(dataUser._id.toString() !== id) {
        let getAct = await model.Act.find({})
        let getActResult = getAct.map((value) => {
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
        return getActResult
    } else {
      const updateAct = await model.Act.updateOne({ _id: id }, requestData , async () => {})
      let getActResult = await model.Act.find({})
      let updateActResult = getActResult.map((value) => {
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
      return updateActResult
    }
}
