import { useState } from "react"
import { useHistory } from "react-router-dom"
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

          new Notification("เข้าสู่ระบบสำเร็จ !", {
            body: "เข้าสู่ระบบสำเร็จ",
          })
          setLoading(false)
        }
      } else {
        setLoading(false)
        new Notification("ผิดพลาด !", {
          body: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาเข้าสู่ระบบใหม่อีกครั้ง",
        })
        localStorage.clear()
      }
    } catch (error) {
      setLoading(false)
      new Notification("แจ้งเตือน !", {
        body: "ระบบมีปัญหา กรุณาติดต่อผู้ดูแลระบบเพื่อแก้ไขปัญหาที่เกิดขึ้น",
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
