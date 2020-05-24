import React from "react"
import { Button } from "antd"

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
    <>
      <Button
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
        {...disabledBtn}
      >
        {okText}
      </Button>
    </>
  )
}

export default Footer
