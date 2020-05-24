const model = require('../../repositories')
var moment = require('moment')
module.exports = async function() {
    let getAllAct = await model.ActType.find({})

    let getAll = getAllAct.map((val,index) => {
        let data = {
            id: val._id,
            key: index,
            nameacttype: val.nameActType
        }
        return data
    })

    return getAll
}
