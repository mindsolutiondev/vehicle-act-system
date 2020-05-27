import React, { useState } from "react"
import { Input, DatePicker, Form } from "antd"

import moment from "moment"
import _get from "lodash.get"

import DynamicsFieldSet from "../../../../../../elements/DynamicsFieldSet"
const formItemLayout = null

const EngineOilForm = (props) => {
  const [form] = Form.useForm()

  const _onSave = (name, type, data) => {
    props.setEngineMock({
      ...props.engineMock,
      [type]: { ...props.engineMock[type], [name]: data },
    })
  }

  const hasDate =
    _get(props.EngineOil, "latestMileNumberDate") === "-"
      ? ""
      : _get(props.EngineOil, "latestMileNumberDate")

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งล่าสุด">
          <Input
            defaultValue={_get(props.EngineOil, "latestMileNumber", "-")}
            onChange={(e) =>
              _onSave("latestMileNumber", "engineOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item
          label="วันที่ที่เปลี่ยนครั้งล่าสุด"
          initialValue={hasDate === "" ? "" : moment(hasDate, "YYYY-MM-DD")}
        >
          <DatePicker
            style={{ width: "100%" }}
            defaultValue={hasDate === "" ? "" : moment(hasDate, "YYYY-MM-DD")}
            onChange={(value, dateString) => {
              _onSave("latestMileNumberDate", "engineOil", dateString)
            }}
          />
        </Form.Item>
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งถัดไป">
          <Input
            defaultValue={_get(props.EngineOil, "nextlatestMileNumber", "-")}
            onChange={(e) =>
              _onSave("nextlatestMileNumber", "engineOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="ชนิดน้ำมัน">
          <Input
            defaultValue={_get(props.EngineOil, "typeOil", "-")}
            onChange={(e) => _onSave("typeOil", "engineOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="จำนวน">
          <Input
            defaultValue={_get(props.EngineOil, "quantity", "-")}
            onChange={(e) => _onSave("quantity", "engineOil", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="ระยะทางคงเหลือ">
          <Input
            defaultValue={_get(props.EngineOil, "remainingDistance", "-")}
            onChange={(e) =>
              _onSave("remainingDistance", "engineOil", e.target.value)
            }
          />
        </Form.Item>

        <DynamicsFieldSet
          header="อะไหล่ที่ต้องใช้"
          defaultValue={_get(props.EngineOil, "spareParts")}
          titleFields="engineOil"
          fields="spareParts"
          onChange={_onSave}
        />
      </Form>
    </div>
  )
}

export default EngineOilForm
