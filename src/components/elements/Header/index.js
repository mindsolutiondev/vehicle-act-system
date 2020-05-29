import { Col, Container, Row } from "reactstrap"

import React from "react"
import { Typography } from "antd"
import styled from "styled-components"

const Contain = styled.div`
  width: 100%;
  padding: 30px;
  font-size: large;
  display: flex;
  justify-content: space-between;

  .fix {
    width: 100%;

    .plusbutton {
      display: flex;
      justify-content: flex-end;
    }
  }
`

const Header = ({ children, name }) => {
  return (
    <Contain>
      <Row className="fix">
        <Col xs="11">
          <Typography.Title level={2}>
            <b>{name}</b>
          </Typography.Title>
        </Col>
        <Col xs="1" className="plusbutton">
          {children}
        </Col>
      </Row>
    </Contain>
  )
}

export default Header
