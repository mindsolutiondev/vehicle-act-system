const mongoose = require('mongoose');
const Schema = mongoose.Schema
const schema = new Schema({
    username:  String,
    password:  String,
    status:  String
})
let Account = mongoose.model('Accounts', schema)
module.exports = Account
