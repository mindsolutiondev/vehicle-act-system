const model = require("../../repositories");
const _get = require('lodash.get')
const mongoose = require('mongoose')

module.exports = async function (id, payload) {
  try {
    let updateGeneralAct = await model.Act.updateOne({ _id: mongoose.Types.ObjectId(id) }, payload); 
    if(_get(updateGeneralAct, 'ok') == 1) {
      return {
        message: 'save successfully'
      }
    }
  } catch (error) {
    return {
      message: error
    }  
  }
};
