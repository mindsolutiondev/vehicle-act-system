import React from "react"
import _get from "lodash.get"
import { Form, Input } from "antd"
import Lists from "../../../../../../elements/Lists"

const EngineOilForm = ({ EngineOil }) => {
  const [form] = Form.useForm()
  return (
    <Form layout="vertical" form={form}>
      <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งล่าสุด">
        <Input value={_get(EngineOil, "latestMileNumber", "-")} disabled />
      </Form.Item>
      <Form.Item label="วันที่เปลี่ยนครั้งล่าสุด">
        <Input value={_get(EngineOil, "latestMileNumberDate", "-")} disabled />
      </Form.Item>
      <Form.Item label="หมายเลขไมล์ที่เปลี่ยนไป">
        <Input value={_get(EngineOil, "nextlatestMileNumber", "-")} disabled />
      </Form.Item>
      <Form.Item label="ชนิดน้ำมัน">
        <Input value={_get(EngineOil, "typeOil", "-")} disabled />
      </Form.Item>
      <Form.Item label="จำนวน">
        <Input value={_get(EngineOil, "quantity", "-")} disabled />
      </Form.Item>
      <Form.Item label="ระยะทางคงเหลือ">
        <Input value={_get(EngineOil, "remainingDistance", "-")} disabled />
      </Form.Item>
      <Form.Item label="อะไหล่ที่ต้องใช้">
        <Lists dataSources={_get(EngineOil, "spareParts", "-")} />
      </Form.Item>
    </Form>
  )
}

export default EngineOilForm
