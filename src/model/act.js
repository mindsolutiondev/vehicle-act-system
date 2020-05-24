import api from "../utils/api"

const ActService = {
  getAllAct: () => {
    return api.get(`api/v1/act/`)
  },
  postAct: (data) => {
    return api.post(`api/v2/act/create`)
  },
  delAct: (id) => {
    return api.delete(`api/v2/act/delete/${id}`)
  },
  getAct: (id) => {
    return api.get(`api/v1/act/${id}`)
  },
  updateAct: (id, data) => {
    return api.put(`api/v1/act/${id}`, data)
  },
  getActNotification: () => {
    return api.get(`api/v1/ActNoti/`)
  },
  getNotification: () => {
    return api.get(`api/v1/datanotifications`)
  },
  postActType: (data) => {
    return api.post(`api/v1/acttype`, data)
  },
  getActType: () => {
    return api.get(`api/v1/acttype`)
  },
  deleteActType: (data) => {
    return api.delete(`api/v1/acttype/${data}`)
  },
  updateActGeneral: (id, data) => {
    return api.put(`api/v2/act/create/general/${id}`, data)
  },
  updateActStepTwo: (id, data) => {
    return api.put(`api/v2/act/create/vehical-info/${id}`, data)
  },
  updateActWheel: (id, data) => {
    return api.put(`api/v2/act/vehical-Wheel/${id}`, data)
  },
  updateOtherDetailStepThree: (id, data) => {
    return api.put(`api/v2/act/create/other-detail/${id}`, data)
  },
  getVehicle: () => {
    return api.get(`api/v2/act`)
  },
  getVehicleById: (id) => {
    return api.get(`api/v2/act/${id}`)
  },
  getVehicleStepTwo: (id) => {
    return api.get(`api/v2/act/step-two/${id}`)
  },
  getWheelStepThree: (id, name, position) => {
    return api.get(
      `api/v2/act/step-three/wheel/${id}?wheelname=${name}&position=${position}`
    )
  },
  getVehicleStepThree: (id) => {
    return api.get(`api/v2/act/step-three/note/${id}`)
  },
}

export default ActService
