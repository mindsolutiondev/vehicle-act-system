const mongoose = require('mongoose');
const Schema = mongoose.Schema
const schema = new Schema({
    nameActType: String
})
let ActType = mongoose.model('ActType', schema)

module.exports = ActType
