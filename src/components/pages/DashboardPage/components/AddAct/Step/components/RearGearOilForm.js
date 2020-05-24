import React, { useState } from "react"
// import { Form } from '@ant-design/compatible';
// import '@ant-design/compatible/assets/index.css';
import { Input, DatePicker, Form } from "antd"
import DynamicsFieldSet from "../../../../../../elements/DynamicsFieldSet"
const formItemLayout = null

const RearGearOilForm = (props) => {
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
              _onSave("latestMileNumber", "rearGearOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="วันที่ที่เปลี่ยนครั้งล่าสุด">
          <DatePicker
            style={{ width: "100%" }}
            onChange={(value, dateString) => {
              _onSave("latestMileNumberDate", "rearGearOil", dateString)
            }}
          />
        </Form.Item>
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งถัดไป">
          <Input
            onChange={(e) =>
              _onSave("nextlatestMileNumber", "rearGearOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="ชนิดน้ำมัน">
          <Input
            onChange={(e) => _onSave("typeOil", "rearGearOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="จำนวน">
          <Input
            onChange={(e) => _onSave("quantity", "rearGearOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="ระยะทางคงเหลือ">
          <Input
            onChange={(e) =>
              _onSave("remainingDistance", "rearGearOil", e.target.value)
            }
          />
        </Form.Item>

        <DynamicsFieldSet
          header="อะไหล่ที่ต้องใช้"
          titleFields="rearGearOil"
          fields="spareParts"
          onChange={_onSave}
        />
      </Form>
    </div>
  )
}

export default RearGearOilForm
