const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  actId: String,
  name: String,
  serialNumber: String,
  typeWheel: String,
  note: String,
  date: String,
  position: String
});
let LogWheelDetail = mongoose.model("logwheels", schema);

module.exports = LogWheelDetail;
