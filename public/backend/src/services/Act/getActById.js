const mongoose = require('mongoose')
const humps = require('humps')
const model = require('../../repositories')
const configDb = require('../../config/database.js')
const checkDateExpired = require('../../libs/checkDateExpired')

module.exports = async function (payload) {
  let  id  = humps.camelizeKeys(payload.params.id)
    let getAllAct = await model.Act.find({ _id: id })
 
    let getAll = getAllAct.map((value) => {
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
    return getAll
}
