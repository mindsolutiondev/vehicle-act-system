import React from "react"
import { Popconfirm, message } from "antd"
import ActService from "../../../model/act"
import { useGlobal } from "reactn"

const Popconfirms = (props) => {
  let [, setActType] = useGlobal("actType")
  const { data } = props

  const confirm = async (e) => {
    let actTypes = await ActService.deleteActType(data)
    message.success("ลบเรียบร้อยแล้ว")
    setActType(actTypes.data.delActResult)
  }

  const cancel = (e) => {}
  return (
    <Popconfirm
      title="คุณแน่ใจหรือไม่ว่าต้องการลบประเภทรถยนต์"
      onConfirm={confirm}
      onCancel={cancel}
      okText="ใช่"
      cancelText="ไม่ใช่"
    >
      <a href="!#">Delete</a>
    </Popconfirm>
  )
}

export default Popconfirms
