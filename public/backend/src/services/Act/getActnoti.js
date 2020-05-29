const model = require("../../repositories")
var moment = require("moment")
module.exports = async function () {
  try {
    let getAllAct = await model.Act.find({})
    let sevenDay = 0
    let fifteenDay = 0
    let expire = 0

    getAllAct.map((value, index) => {
      let start = moment(value.actExpireDate)
      let end = moment(moment().format("YYYY-MM-DD"))
      let result = start.diff(end, "days")
      if (result <= 15 && result > 7) {
        fifteenDay++
      } else if (result <= 7 && result >= 1) {
        sevenDay++
      } else if (result <= 0) {
        expire++
      }
    })
    let data = {
      namefifteen: "เหลือทะเบียนที่ใกล้หมดอายุ 15 วัน",
      amountfifteen: fifteenDay,
      namecountseven: "เหลือทะเบียนที่ใกล้หมดอายุ 7 วัน",
      amountcountseven: sevenDay,
      nameexpire: "หมดอายุแล้ว",
      amountexpire: expire,
    }
    return data
  } catch (error) {
    throw error
  }
}
