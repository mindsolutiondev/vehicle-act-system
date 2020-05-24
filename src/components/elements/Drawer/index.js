import React from "react"
import { Drawer } from 'antd'

const Drawers = ({ visible, close, children }) => {
  return (
    <Drawer
      title="ตรวจเช็คสถานะทะเบียนรถ"
      placement="right"
      width={400}
      closable={false}
      onClose={close}
      visible={visible}
    >
      {children}
    </Drawer>
  )
}

export default Drawers