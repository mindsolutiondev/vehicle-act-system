const mongoose = require('mongoose')
const model = require('../../repositories')
const configDb = require('../../config/database.js')

module.exports = async function (payload) {
  try{
    let data = {
      username: payload.username,
      password: payload.password,
      status: payload.status
    }
    await model.Account.create(data , async (err, data) => {})
    let getAllAccount = await model.Account.find({})
    let getAll = getAllAccount.map((val) => {
      let data = {
        id: val._id,
        username: val.username,
        password: val.password,
        status: val.status
      }
      return data
    })
    return getAll
  } catch (error) {
    throw error
  }
}
