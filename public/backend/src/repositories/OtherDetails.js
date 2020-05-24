const mongoose = require('mongoose');
const Schema = mongoose.Schema
const schema = new Schema({
    actId: { type: mongoose.Schema.Types.ObjectId, ref: "Act", index: 1 },
    details: String
})
let OtherDetails = mongoose.model('OtherDetails', schema)

module.exports = OtherDetails
