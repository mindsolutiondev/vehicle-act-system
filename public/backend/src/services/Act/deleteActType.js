const model = require('../../repositories')
const get = require('lodash.get')
module.exports = async function (payload) {
    let id = payload;
    try {
      let getAct = await model.ActType.findByIdAndDelete({ _id: id.trim() })
      let getAllActType = await model.ActType.find({})
      let results = getAllActType.map((value, index) => {
        let data = {
          key: index,
          id: value._id,
          nameacttype: value.nameActType,
        }
        return data
      })
      return results
    } catch (err) {
      let resultss = getAllActType.map((value, index) => {
        let data = {
          key: index,
          id: value._id,
          nameacttype: value.nameActType,
        }
        return data
      })
      return resultss
    }
}
