import api from "../utils/api"

const AuthService = {
  checkAuth: (user) => {
    return api.post(`api/management/chkaccount`, user)
  },
}

export default AuthService
