import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import { white } from "ansi-colors"

const Contain = styled.div`
  width: 100%;
  padding: 30px;
  font-size: large;
  display: flex;
  justify-content: space-between;

  .fix {
    width: 100%

    .plusbutton {
      display: flex;
      justify-content: flex-end;
    }
  }
  
`

const Header = ({ children, name }) => {
  return(
    <Contain>
        <Row className="fix">
          <Col xs="11">
            <h3><b>{name}</b></h3>
          </Col>
          <Col xs="1" className="plusbutton">
            {children}
          </Col>
        </Row>
    </Contain>
  )
}

export default Header 