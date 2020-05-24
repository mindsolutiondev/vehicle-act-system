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
module.exports = async function () {
  try{
    let getAllAccount = await model.Account.find({})
    let getAll = getAllAccount.map((value) => {
      let data = {
        id: value._id,
        username: value.username,
        password: value.password,
        status: value.status
      }
      return data
    })
    return getAll
  } catch (error) {
    throw error
  }
}
