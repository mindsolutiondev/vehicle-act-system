import React from "react"
import moment from "moment"

import _get from "lodash.get"

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

  const hasDate =
    _get(props.GreaseWheel, "latestMileNumberDate") === "-"
      ? ""
      : _get(props.GreaseWheel, "latestMileNumberDate")

  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งล่าสุด">
          <Input
            value={_get(props.GreaseWheel, "latestMileNumber", "-")}
            onChange={(e) =>
              _onSave("latestMileNumber", "greaseWheelOil", e.target.value)
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
              _onSave("latestMileNumberDate", "greaseWheelOil", dateString)
            }}
          />
        </Form.Item>
        <Form.Item label="หมายเลขไมล์ที่เปลี่ยนครั้งถัดไป">
          <Input
            value={_get(props.GreaseWheel, "nextlatestMileNumber", "-")}
            onChange={(e) =>
              _onSave("nextlatestMileNumber", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item label="ชนิดน้ำมัน">
          <Input
            value={_get(props.GreaseWheel, "typeOil", "-")}
            onChange={(e) =>
              _onSave("typeOil", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item label="จำนวน">
          <Input
            value={_get(props.GreaseWheel, "quantity", "-")}
            onChange={(e) =>
              _onSave("quantity", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item label="ระยะทางคงเหลือ">
          <Input
            value={_get(props.GreaseWheel, "remainingDistance", "-")}
            onChange={(e) =>
              _onSave("remainingDistance", "greaseWheelOil", e.target.value)
            }
          />
        </Form.Item>

        <DynamicsFieldSet
          header="อะไหล่ที่ต้องใช้"
          defaultValue={_get(props.GreaseWheel, "spareParts")}
          titleFields="greaseWheelOil"
          fields="spareParts"
          onChange={_onSave}
        />
      </Form>
    </div>
  )
}

export default GreaseWheelForm
