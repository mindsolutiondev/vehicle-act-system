const model = require("../../repositories");
const _ = require("lodash");

module.exports = async function (payload) {
  let Act = await model.Act.find(payload).sort({ _id: -1 });
  let ActData = Act.map((val, index) => {
    return {
      ..._.omit(val, ["__v"]),
    };
  });
  return ActData;
};
