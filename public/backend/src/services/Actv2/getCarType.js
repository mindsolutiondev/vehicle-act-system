const model = require("../../repositories")

module.exports = async () => {
  try {
    let carType = await model.ActType.find().sort({ _id: -1 }).lean()
    return {
      data: carType,
    }
  } catch (err) {
    return {
      message: err.message,
    }
  }
}
