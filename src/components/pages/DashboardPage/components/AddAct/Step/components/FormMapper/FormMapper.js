import React from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { Descriptions, Card, DatePicker } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import ActService from "../../../../../../../../model/act"

const FormMapper = (props) => {
  const { setOpenForm, name, position } = props

  const onFinish = async (values) => {
    let dataToSend = {
      ...values,
      name,
      actId: localStorage.getItem("actId"),
      position,
    }

    console.log(dataToSend)
    await ActService.updateActWheel(localStorage.getItem("actId"), dataToSend)
    setOpenForm(false)
  }
  return (
    <Form name="basic" onFinish={onFinish}>
      <Descriptions bordered>
        <Descriptions.Item label="S/N">
          {" "}
          <Form.Item
            name="serialNumber"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Descriptions.Item>
        <Descriptions.Item label="ชนิดยาง">
          <Form.Item
            name="typeWheel"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>
        </Descriptions.Item>
        <Descriptions.Item label="หมายเหตุ">
          <Form.Item
            name="note"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>
        </Descriptions.Item>
        <Descriptions.Item label="วันที่">
          <Form.Item name="date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Descriptions.Item>
      </Descriptions>

      <Form.Item
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormMapper
