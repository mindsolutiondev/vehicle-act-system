const model = require("../../repositories");
const _get = require('lodash.get')
module.exports = async function (id, payload) {
  console.log(id, payload)
  try {
    let updateOtherDetails = await model.OtherDetails.updateOne(
      { actId: id },
      payload
    );
    if(_get(updateOtherDetails, 'ok') == 1) {
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
