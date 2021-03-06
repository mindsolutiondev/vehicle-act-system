import { useState } from "react"
import { useHistory } from "react-router-dom"
import { notification } from "antd"
import AuthService from "../../../../model/auth"

const useAuthen = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [login, setLogin] = useState({
    username: "",
    password: "",
  })

  const _setAuthentication = (name, e) => {
    setLogin({ ...login, [name]: e.target.value })
  }

  const _handleSubmit = async () => {
    try {
      setLoading(true)
      let users = await AuthService.checkAuth(login)
      if (users.data.checkAccountResult.status !== "Not Found") {
        if (
          login.username ===
            users.data.checkAccountResult.getAccount.username &&
          login.password === users.data.checkAccountResult.getAccount.password
        ) {
          localStorage.setItem(
            "access-token",
            users.data.checkAccountResult.token
          )
          localStorage.setItem(
            "status",
            users.data.checkAccountResult.getAccount.status
          )
          localStorage.setItem(
            "user",
            users.data.checkAccountResult.getAccount.username
          )
          history.push("/dashboard")

          notification.success({
            message: "เข้าสู่ระบบสำเร็จ",
          })

          setLoading(false)
        }
      } else {
        setLoading(false)
        notification.error({
          message:
            "เข้าสู่ระบบไม่สำเร็จ เนื่องจาก ชื่อผู้ใช้งานหรือรหัสผ่านมีปัญหา",
        })
        localStorage.clear()
      }
    } catch (error) {
      setLoading(false)
      notification.error({
        message:
          "เกิดปัญหาขึ้นกับระบบเครือข่าย กรุณาติดต่อผู้ดูแลระบบเพื่อแจ้งปัญหาที่เกิดขึ้น",
      })
      localStorage.clear()
    }
  }

  return {
    setAuth: _setAuthentication,
    authData: login,
    submit: _handleSubmit,
    loading,
  }
}

export default useAuthen
