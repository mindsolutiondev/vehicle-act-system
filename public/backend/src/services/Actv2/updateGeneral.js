const model = require("../../repositories");

module.exports = async function (id, payload) {
  try {
    let updateGeneralAct = await model.Act.updateOne({ _id: id }, payload);
    
  } catch (error) {
    throw new Error("Cannot Delete");
  }
};
