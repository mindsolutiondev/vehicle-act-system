import React from "react"
import { Form, Input } from "antd"
import _get from "lodash.get"
import Lists from "../../../../../../elements/Lists"

const GreaseWheelForm = ({ GreaseWheel }) => {
  const [form] = Form.useForm()
  return (
    <Form layout="vertical" form={form}>
      <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งล่าสุด">
        <Input value={_get(GreaseWheel, "latestMileNumber", "-")} disabled />
      </Form.Item>
      <Form.Item label="วันที่เปลี่ยนครั้งล่าสุด">
        <Input
          value={_get(GreaseWheel, "latestMileNumberDate", "-")}
          disabled
        />
      </Form.Item>
      <Form.Item label="หมายเลขไมล์ที่เปลี่ยนไป">
        <Input
          value={_get(GreaseWheel, "nextlatestMileNumber", "-")}
          disabled
        />
      </Form.Item>
      <Form.Item label="ชนิดน้ำมัน">
        <Input value={_get(GreaseWheel, "typeOil", "-")} disabled />
      </Form.Item>
      <Form.Item label="จำนวน">
        <Input value={_get(GreaseWheel, "quantity", "-")} disabled />
      </Form.Item>
      <Form.Item label="ระยะทางคงเหลือ">
        <Input value={_get(GreaseWheel, "remainingDistance", "-")} disabled />
      </Form.Item>
      <Form.Item label="อะไหล่ที่ต้องใช้">
        <Lists dataSources={_get(GreaseWheel, "spareParts", "-")} />
      </Form.Item>
    </Form>
  )
}

export default GreaseWheelForm
