import React from "react"
import { Container, Input, Label, FormGroup } from "reactstrap"
import useAuthen from "./hooks/useAuthen"
import { ContainBox, LoginBox } from "./index.styles"
import { Spin, Space } from "antd"

const LoginPage = () => {
  const { setAuth, submit, loading } = useAuthen()
  return (
    <ContainBox>
      {loading ? (
        <Space>
          {" "}
          <Spin size="large" />
        </Space>
      ) : (
        <Container>
          <LoginBox>
            <>
              <div className="header">เข้าสู่ระบบ</div>
              <div className="boxWrap">
                <FormGroup>
                  <Label for="Username">ชื่อผู้ใช้งาน</Label>
                  <Input type="text" onChange={(e) => setAuth("username", e)} />
                </FormGroup>
                <FormGroup>
                  <Label for="Username">รหัสผ่าน</Label>
                  <Input
                    type="password"
                    onChange={(e) => setAuth("password", e)}
                  />
                </FormGroup>
              </div>
              <div className="buttonWrap">
                <button className="buttonLogin" onClick={submit}>
                  เข้าสู่ระบบ
                </button>
              </div>
            </>
          </LoginBox>
        </Container>
      )}
    </ContainBox>
  )
}

export default LoginPage
