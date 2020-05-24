const mongoose = require('mongoose');
const Schema = mongoose.Schema
const schema = new Schema({
    nameActType: String
})
let Act = mongoose.model('ActType', schema)

module.exports = Act
