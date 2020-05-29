import React from "react"

import { Input, DatePicker, Form } from "antd"
import DynamicsFieldSet from "../../../../../../elements/DynamicsFieldSet"

const GreaseWheelForm = (props) => {
  const [form] = Form.useForm()

  const _onSave = (name, type, data) => {
    props.setEngineMock({
      ...props.engineMock,
      [type]: { ...props.engineMock[type], [name]: data },
    })
  }

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งล่าสุด">
          <Input
            onChange={(e) =>
              _onSave("latestMileNumber", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="วันที่ที่เปลี่ยนครั้งล่าสุด">
          <DatePicker
            style={{ width: "100%" }}
            onChange={(value, dateString) => {
              _onSave("latestMileNumberDate", "greaseWheelOil", dateString)
            }}
          />
        </Form.Item>
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งถัดไป">
          <Input
            onChange={(e) =>
              _onSave("nextlatestMileNumber", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="ชนิดน้ำมัน">
          <Input
            onChange={(e) =>
              _onSave("typeOil", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item label="จำนวน">
          <Input
            onChange={(e) =>
              _onSave("quantity", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item label="ระยะทางคงเหลือ">
          <Input
            onChange={(e) =>
              _onSave("remainingDistance", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>

        <DynamicsFieldSet
          header="อะไหล่ที่ต้องใช้"
          titleFields="greaseWheelOil"
          fields="spareParts"
          onChange={_onSave}
        />
      </Form>
    </div>
  )
}

export default GreaseWheelForm
