import React, { useState } from "react"
import moment from "moment"

import _get from "lodash.get"

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

  const hasDate =
    _get(props.RearGearOil, "latestMileNumberDate") === "-"
      ? ""
      : _get(props.RearGearOil, "latestMileNumberDate")

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งล่าสุด">
          <Input
            value={_get(props.RearGearOil, "latestMileNumber", "-")}
            onChange={(e) =>
              _onSave("latestMileNumber", "rearGearOil", e.target.value)
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
              _onSave("latestMileNumberDate", "rearGearOil", dateString)
            }}
          />
        </Form.Item>
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งถัดไป">
          <Input
            value={_get(props.RearGearOil, "latestMileNumber", "-")}
            onChange={(e) =>
              _onSave("nextlatestMileNumber", "rearGearOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="ชนิดน้ำมัน">
          <Input
            value={_get(props.RearGearOil, "typeOil", "-")}
            onChange={(e) => _onSave("typeOil", "rearGearOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="จำนวน">
          <Input
            value={_get(props.RearGearOil, "quantity", "-")}
            onChange={(e) => _onSave("quantity", "rearGearOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="ระยะทางคงเหลือ">
          <Input
            value={_get(props.RearGearOil, "remainingDistance", "-")}
            onChange={(e) =>
              _onSave("remainingDistance", "rearGearOil", e.target.value)
            }
          />
        </Form.Item>

        <DynamicsFieldSet
          header="อะไหล่ที่ต้องใช้"
          defaultValue={_get(props.RearGearOil, "spareParts")}
          titleFields="rearGearOil"
          fields="spareParts"
          onChange={_onSave}
        />
      </Form>
    </div>
  )
}

export default RearGearOilForm
