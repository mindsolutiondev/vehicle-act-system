import React, { useContext } from "react"
import { Button, Popconfirm, message } from "antd"

import ActService from "../../../../../model/act"
import { DeleteContext } from "../../../../../constants/context"

const Delete = ({ id, setRefetch }) => {
  const handledel = useContext(DeleteContext)
  const _handleDelete = async () => {
    try {
      await ActService.delAct(id).then(() =>
        handledel.setRefetch((prev) => !prev)
      )
      new Notification("แจ้งเตือน !", {
        body: "ลบข้อมูลเรียบร้อย",
      })
    } catch {
      new Notification("แจ้งเตือน !", {
        body: "ไม่สามารถลบข้อมูลได้ อาจเกิดปัญหาจากระบบ Server",
      })
    }
  }

  const cancel = () => {}
  return (
    <Popconfirm
      title="คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูล"
      onConfirm={_handleDelete}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button type="danger" size="small">
        ลบ
      </Button>
    </Popconfirm>
  )
}

export default Delete
