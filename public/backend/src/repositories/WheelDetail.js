const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  actId: { type: mongoose.Schema.Types.ObjectId, ref: "Act", index: 1 },
  name: String,
  serialNumber: String,
  typeWheel: String,
  note: String,
  date: String,
  position: {
    type: String,
    enum: ["หลัง", "หน้า"],
  },
});
let WheelDetail = mongoose.model("WheelDetail", schema);

module.exports = WheelDetail;
