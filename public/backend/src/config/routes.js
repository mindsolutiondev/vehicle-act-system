const actController = require('../controllers/Act')
const authController = require('../controllers/Auth')
module.exports = {
  management: [
    {
      methods: 'GET',
      path: '/act/',
      controller: actController.getAct
    },
    {
      methods: 'GET',
      path: '/Actnoti/',
      controller: actController.getActnoti
    },
    {
      methods: 'GET',
      path: '/act/:id',
      controller: actController.getActById
    },
    {
      methods: 'GET',
      path: '/datanotifications',
      controller: actController.getdatanotifications
    },
    {
      methods: 'POST',
      path: '/act/',
      controller: actController.create
    },
    {
      methods: 'POST',
      path: '/activation/',
      controller: authController.activation
    },
    {
      methods: 'POST',
      path: '/activation/generator',
      controller: authController.activationGenerator
    },
    {
      methods: 'GET',
      path: '/activation/status',
      controller: authController.activationStatus
    },
    {
      methods: 'GET',
      path: '/activation/confirm',
      controller: authController.activationConfirm
    },
    {
      methods: 'PUT',
      path: '/act/:id',
      controller: actController.updateAct
    },
    {
      methods: 'DELETE',
      path: '/act/:id',
      controller: actController.deleteAct
    },
    {
      methods: 'GET',
      path: '/account/',
      controller: authController.getAccount
    },
    {
      methods: 'GET',
      path: '/account/:id',
      controller: authController.getAccountById
    },
    {
      methods: 'POST',
      path: '/chkaccount/',
      controller: authController.checkAccount
    },
    {
      methods: 'POST',
      path: '/account/',
      controller: authController.createAccount
    },
    {
      methods: 'PUT',
      path: '/account/:id',
      controller: authController.updateAccount
    },
    {
      methods: 'DELETE',
      path: '/account/:id',
      controller: authController.deleteAccount
    },
    {
      methods: 'POST',
      path: '/login',
      controller: authController.login
    },
    {
      methods: 'POST',
      path: '/logout',
      controller: authController.logout
    }, 
    {
      methods: 'POST',
      path: '/acttype',
      controller: actController.createActType
    },
    {
      methods: 'GET',
      path: '/acttype',
      controller: actController.getActType
    },
    {
      methods: 'DELETE',
      path: '/acttype/:id',
      controller: actController.deleteActType
    }
  ]
}
