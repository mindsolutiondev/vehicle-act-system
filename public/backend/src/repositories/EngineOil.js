const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spare = new Schema({
  spareParts: String,
});

const schema = new Schema({
  actId: { type: mongoose.Schema.Types.ObjectId, ref: "Act", index: 1 },
  latestMileNumber: String,
  latestMileNumberDate: String,
  nextlatestMileNumber: String,
  typeOil: String,
  quantity: String,
  remainingDistance: String,
  spareParts: [spare],
});

let EngineOil = mongoose.model("EngineOil", schema);

module.exports = EngineOil;
