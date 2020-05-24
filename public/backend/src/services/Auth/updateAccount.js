const humps = require('humps')
const mongoose = require('mongoose')
const model = require('../../repositories')
const configDb = require('../../config/database.js')
mongoose.connect(configDb.connectDB,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
  },function(error){
      if(error){
        console.log(error);
      }
  }
);
module.exports = async function (payload) {
  try{
    let id  = humps.camelizeKeys(payload.params.id)
    let requestData = humps.camelizeKeys(payload.body)
    let getAccount = await model.Account.findOne({ _id: id })
    if(getAccount._id.toString() !== id) {
      let getAccountUser = await model.Account.findOne({ _id: id })
      let editAccountResults = getAccountUser.map((val) => {
        let data = {
          id: val._id,
          username: val.username,
          password: val.password,
          status: val.status
        }
        return data
      })
     return editAccountResults
     } else {
      await model.Account.updateOne({ _id: id }, requestData , async () => {})
      let getAccount = await model.Account.find({})
      let updateAccountResult = getAccount.map((val) => {
        let data = {
          id: val._id,
          username: val.username,
          password: val.password,
          status: val.status
          }
          return data
        })
      return updateAccountResult
     }
  } catch (error) {
    throw error
  }
}
