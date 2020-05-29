const model = require('../../repositories')
const login  = require('../../services/Auth/login')

module.exports = async function (payload) {
  try{
    let { username, password } = payload
    let getAccount = await model.Account.findOne({ username: username, password: password})
    if(getAccount==null){
      return ({status: "Not Found"})
    } else {
      let token = await login(getAccount)
      let res = {}
      res = {
        getAccount,
        token
      }
      return res
    }
  } catch (error) {
    throw error
  }
}
