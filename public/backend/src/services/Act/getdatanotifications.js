const model = require('../../repositories')
var moment = require('moment');     
module.exports = async function () {
  try{
    let getAllAct = await model.Act.find({})
    let countseven =0;
    let countfifteen =0;
    let getAll = getAllAct.map((value,index) => {

      let start = moment(value.actExpireDate); 
      let end = moment(moment().format("YYYY-MM-DD"));
      let result = start.diff(end, 'days');

      if(result <= 15 && result > 7) {
        let data = {
          licensePlate: value.licensePlate,
          statusexpired:"15 Day",
          vehicleType: value.vehicleType
        }
        return data
      } else if (result <= 7 && result >= 1) {
        let data = {
          licensePlate: value.licensePlate,
          statusexpired:"7 Day",
          vehicleType: value.vehicleType
        }
        return data
      } else if (result > 15) {
        return null
      } else if (result === 0) {
        let data = {
          licensePlate: value.licensePlate,
          statusexpired:"Expired",
          vehicleType: value.vehicleType
        }
        return data
      } else {
        let data = {
          licensePlate: value.licensePlate,
          statusexpired:"Expired",
          vehicleType: value.vehicleType
        }
        return data
      }

    })
    return getAll.filter(x => !!x)
  } catch (error) {
    throw error
  }
}
