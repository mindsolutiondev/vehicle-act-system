const mongoose = require('mongoose');
const Schema = mongoose.Schema
const schema = new Schema({
    licensePlate:  String,
    vehicleType:  String,
    actExpireDate:  String,
    insureExpireDate:  String,
    distance: String,
    vehicalBook:  String,
    insureDocuments:  String,
    vehicleImg:  String,
    carmileage: String,
    datecarmileage: String,
    driverName: String,
    phone: String,
    brands: String,
    type: String,
    groupcar: String,
})
let Act = mongoose.model('Acts', schema)
module.exports = Act
