const model = require("../../repositories");
const _ = require("lodash");

module.exports = async function (id, wheelname, positions) {
  try {
    let logics = {
      $and: [{ actId: id }, { name: wheelname }, { position: positions }],
    };

    const logWheel = await model.LogWheelDetail.find(logics).sort({ _id: -1 }).lean();
    return {
      data: logWheel,
    };
  } catch (err) {
    return {
      message: err.message,
    };
  }
};
