import React from "react"
import { Modal } from "antd"

const Modals = ({ children, visible, title, onOk, onCancel, ...rest }) => {
  return (
    <Modal
      visible={visible}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      width={800}
      {...rest}
    >
      {children}
    </Modal>
  )
}

export default Modals
