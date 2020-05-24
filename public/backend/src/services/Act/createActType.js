const model = require('../../repositories')
const checkDateExpired = require('../../libs/checkDateExpired')
var isEmpty = require('lodash.isempty')

async function ActTypeImplement () {
   let getAllAct = await model.ActType.find({})
    
   let getAll = getAllAct.map((val,index) => {
       let data = {
           key: index,
           nameacttype: val.nameActType
       }
       return data
   })

   return getAll
}

module.exports = async function (payload) {
   try {
      let data = await model.ActType.find({ nameActType: payload.nameActType })
      if(isEmpty(data)) {
         await model.ActType.create(payload)
         return ActTypeImplement()
      } else {
         return ActTypeImplement()

      }
   } catch (error) {
      throw error
   }
}
