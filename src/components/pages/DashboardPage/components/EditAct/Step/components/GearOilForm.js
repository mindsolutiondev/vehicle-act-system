import React, { useState } from "react"
import _get from "lodash.get"

import { Input, DatePicker, Form } from "antd"
import moment from "moment"

import DynamicsFieldSet from "../../../../../../elements/DynamicsFieldSet"
const formItemLayout = null

const GearOilForm = (props) => {
  const [form] = Form.useForm()

  const _onSave = (name, type, data) => {
    props.setEngineMock({
      ...props.engineMock,
      [type]: { ...props.engineMock[type], [name]: data },
    })
  }

  const hasDate =
    _get(props.GearOil, "latestMileNumberDate") === "-"
      ? ""
      : _get(props.GearOil, "latestMileNumberDate")

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งล่าสุด">
          <Input
            value={_get(props.GearOil, "latestMileNumber", "-")}
            onChange={(e) =>
              _onSave("latestMileNumber", "gearOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item
          label="วันที่ที่เปลี่ยนครั้งล่าสุด"
          initialValue={hasDate === "" ? "" : moment(hasDate, "YYYY-MM-DD")}
        >
          <DatePicker
            defaultValue={hasDate === "" ? "" : moment(hasDate, "YYYY-MM-DD")}
            style={{ width: "100%" }}
            onChange={(value, dateString) => {
              _onSave("latestMileNumberDate", "gearOil", dateString)
            }}
          />
        </Form.Item>
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งถัดไป">
          <Input
            value={_get(props.GearOil, "nextlatestMileNumber", "-")}
            onChange={(e) =>
              _onSave("nextlatestMileNumber", "gearOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="ชนิดน้ำมัน">
          <Input
            value={_get(props.GearOil, "typeOil", "-")}
            onChange={(e) => _onSave("typeOil", "gearOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="จำนวน">
          <Input
            value={_get(props.GearOil, "quantity", "-")}
            onChange={(e) => _onSave("quantity", "gearOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="ระยะทางคงเหลือ">
          <Input
            value={_get(props.GearOil, "remainingDistance", "-")}
            onChange={(e) =>
              _onSave("remainingDistance", "gearOil", e.target.value)
            }
          />
        </Form.Item>

        <DynamicsFieldSet
          header="อะไหล่ที่ต้องใช้"
          defaultValue={_get(props.GearOil, "spareParts")}
          titleFields="gearOil"
          fields="spareParts"
          onChange={_onSave}
        />
      </Form>
    </div>
  )
}

export default GearOilForm
