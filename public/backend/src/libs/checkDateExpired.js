let moment = require('moment')

module.exports = function checkDateExpired (date) {
  let start = moment(date); 
  let end = moment(moment().format("YYYY-MM-DD"));
  let result = start.diff(end, 'days');
  let data;

  if(result <= 15 && result > 7) {
    data = {
      statusexpired:"15 Day",
    }
    return data
  } else if (result <= 7 && result >= 1) {
    data = {
      statusexpired:"7 Day",
    }
  } else if (result > 15) {
    data = {
      statusexpired:"Normal",
    }
  } else if (result === 0) {
    data = {
      statusexpired:"Expired",
    }
  } else {
    data = {
      statusexpired:"Expired",
    }
  }
  
  return data
}