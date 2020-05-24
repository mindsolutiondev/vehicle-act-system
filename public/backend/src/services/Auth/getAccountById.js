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
    let { id } = payload.params;
    let getAccountById = await model.Account.find({ _id: id })
    let getlById = getAccountById.map((val) => {
      let data = {
        id: val._id,
        username: val.username,
        password: val.password,
        status: val.status
      }
      return data
    })
    return getlById
  } catch (error) {
    throw error
  }
}
