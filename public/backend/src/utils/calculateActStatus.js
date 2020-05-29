var moment = require("moment");

module.exports = (actExpireDate) => {
  let start = moment(actExpireDate);
  let end = moment(moment().format("YYYY-MM-DD"));
  let result = start.diff(end, "days");
  if (result <= 15 && result > 7) {
    let data = {
      statusexpired: "15 Day",
    };
    return data;
  } else if (result <= 7 && result >= 1) {
    let data = {
      statusexpired: "7 Day",
    };
    return data;
  } else if (result > 15) {
    let data = {
      statusexpired: "Normal",
    };
    return data;
  } else if (result === 0) {
    let data = {
      statusexpired: "Expired",
    };
    return data;
  } else {
    let data = {
      statusexpired: "Expired",
    };
    return data;
  }
};
