import { Button } from "antd"
import React from "react"
import styled from "styled-components"

const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`

const Footer = ({
  handleSubmit,
  onClickCancel,
  okText,
  cancelText,
  noBorder,
}) => {
  const disabledBtn =
    !!onClickCancel || !!handleSubmit ? {} : { disabled: true }
  return (
    <FooterStyled>
      <Button
        type="link"
        onClick={onClickCancel}
        style={{ marginRight: "10px" }}
        {...disabledBtn}
      >
        {cancelText}
      </Button>
      <Button
        onClick={handleSubmit}
        style={{ width: "85px" }}
        htmlType="submit"
        type="submit"
        mini="true"
        type="primary"
        {...disabledBtn}
      >
        {okText}
      </Button>
    </FooterStyled>
  )
}

export default Footer
