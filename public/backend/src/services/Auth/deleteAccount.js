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
    let id = payload;
    let delteAccountResult = await model.Account.findByIdAndDelete({ _id: id.trim() })
    let getAccountResult = await model.Account.find({})
    let accountDeleteResult = getAccountResult.map((val) => {
      let data = {
        id: val._id,
        username: val.username,
        password: val.password,
        status: val.status
      }
      return data
    })
    return accountDeleteResult
  } catch (error) {
    let getAccountResult = await model.Account.find({})
        let resultsAccount = getAccountResult.map((val) => {
          let datas = {
            id: val._id,
            username: val.username,
            password: val.password,
            status: val.status
          }
          return datas
        })
        return resultsAccount
  }
}
