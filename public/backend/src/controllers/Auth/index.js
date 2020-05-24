const getAccount = require('./getAccount')
const getAccountById = require('./getAccountById')
const createAccount = require('./createAccount')
const updateAccount = require('./updateAccount')
const deleteAccount = require('./deleteAccount')
const checkAccount = require('./checkAccount')
const activation = require('./activation')
const activationGenerator = require('./activationGenerator')
const activationStatus = require('./activationStatus')
const activationConfirm = require('./activationConfirm')

module.exports = {
  getAccount,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
  checkAccount,
  activation,
  activationGenerator,
  activationStatus,
  activationConfirm
}
