const model = require("../../repositories");
const _ = require("lodash");
const calculateActStatus = require("../../utils/calculateActStatus");

module.exports = async function (payload, filter) {
  let Act = await model.Act.find(payload).sort({ _id: -1 }).lean();
  let ActData = Act.map((val) => {
    return {
      ..._.omit(val, ["__v"]),
      ...calculateActStatus(val.actExpireDate),
    };
  });

  let arrayFilter = !!filter && filter.split(",");
  return filter !== undefined
    ? ActData.filter((x) => {
        return arrayFilter.includes(x.statusexpired);
      })
    : ActData;
};
