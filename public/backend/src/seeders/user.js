const model = require('../repositories')
const data = require('../utils/mockActType')

async function seeders() {
  let data = await model.Account.findOne({ username: 'admin', password: '12345' })
  if(data == null) {
    model.Account.create({
      username: 'admin',
      password: '12345',
      status: 'admin'
    })    
  } else {}

}

data.typecar.map(async (val) => {
  let data = await model.ActType.findOne({ nameActType: val })
  if(data == null) {
    model.ActType.create({
      nameActType: val
    }) 
  } else {}
})


seeders()