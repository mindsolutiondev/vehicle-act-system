// const humps = require('humps')
const { getAct } = require('../../services/Actv2')

module.exports = async (req, res) => {
  let { id } = req.params
  let isId = !!id ? {_id: id } : {}
  let data = await getAct(isId);
  res.send({
    success: true,
    data: data,
  });
}