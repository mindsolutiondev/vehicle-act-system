
const model = require('../../repositories')
const { getActType } = require('../../services/Act')

module.exports = async function (req,res) {
    let getAllAct = await getActType()
    res.send({
        success: true,
        getAllAct
    })
}
