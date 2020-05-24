const model = require('../../repositories')
var moment = require('moment')
module.exports = async function() {
  try {
    let getAllAct = await model.Act.find({})
    let countseven = 0
    let countfifteen = 0
    let countexpire = 0
    getAllAct.map((value, index) => {
      let start = moment(value.actExpireDate)
      let end = moment(moment().format('YYYY-MM-DD'))
      let result = start.diff(end, 'days')
      if (result <= 7 && result >= 1) {
        countseven += 1
      } else if (result <= 15 && result > 7) {
        countfifteen += 1
      } else if (result <= 0) {
        countexpire += 1
      }
    })
    let data = {
      namefifteen: 'เหลือทะเบียนที่ใกล้หมดอายุ 15 วัน',
      amountfifteen: countfifteen,
      namecountseven: 'เหลือทะเบียนที่ใกล้หมดอายุ 7 วัน',
      amountcountseven: countseven,
      nameexpire: 'หมดอายุแล้ว',
      amountexpire: countexpire,
    }
    return data
  } catch (error) {
    throw error
  }
}
