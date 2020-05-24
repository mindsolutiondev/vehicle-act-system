import api from "../utils/api"

const AuthService = {
  checkAuth: (user) => {
    return api.post(`api/v1/chkaccount`, user)
  },
}

export default AuthService
