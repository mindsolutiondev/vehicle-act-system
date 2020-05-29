const actController = require('../controllers/Act')
const authController = require('../controllers/Auth')
const actV2Controller = require('../controllers/Actv2')

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
    },
  ],
  v2: [
    {
      methods: 'POST',
      path: '/act/create',
      controller: actV2Controller.create
    },
    {
      methods: 'DELETE',
      path: '/act/delete/:id',
      controller: actV2Controller.deleteById
    },
    {
      methods: 'PUT',
      path: '/act/create/general/:id',
      controller: actV2Controller.updateGeneral
    },
    {
      methods: 'PUT',
      path: '/act/create/vehical-info/:id',
      controller: actV2Controller.vehicalInfo
    },
    {
      methods: 'PUT',
      path: '/act/vehical-Wheel/:id',
      controller: actV2Controller.vehicalWheel
    },
    {
      methods: 'POST',
      path: '/act/LogWheelDetail',
      controller: actV2Controller.LogWheelDetail
    },
    {
      methods: 'PUT',
      path: '/act/create/other-detail/:id',
      controller: actV2Controller.OtherDetails
    },
    {
      methods: 'PUT',
      path: '/act/upload-image/:id',
      controller: actV2Controller.uploadImage
    },
    {
      methods: 'GET',
      path: '/act',
      controller: actV2Controller.getAct
    },
    {
      methods: 'GET',
      path: '/act/:id',
      controller: actV2Controller.getAct
    }, 
    {
      methods: 'GET',
      path: '/act/step-two/:id',
      controller: actV2Controller.getVehicleInfo
    },
    {
      methods: 'GET',
      path: '/act/step-three/wheel/:id',
      controller: actV2Controller.getWheel
    },
    {
      methods: 'GET',
      path: '/act/step-three/note/:id',
      controller: actV2Controller.getOtherVehicle
    },
    {
      methods: 'GET',
      path: '/car-type',
      controller: actV2Controller.getCarType
    }
  ]
}
