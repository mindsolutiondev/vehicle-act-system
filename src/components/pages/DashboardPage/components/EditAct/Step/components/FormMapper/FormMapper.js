import React from "react"
import { Form, Input, Button, Row, Col, Card, DatePicker } from "antd"
import LogTable from "../LogTable"
import ActService from "../../../../../../../../model/act"
import useGetOneVehicle from "../../../../../hooks/useGetOneVehicle"

const FormMapper = (props) => {
  const { name, position, actId } = props
  const { show, loading, setRefetch } = useGetOneVehicle({
    actId,
    step: 3,
    other: {
      name: name,
      position: position,
    },
  })

  const onFinish = async (values) => {
    let dataToSend = {
      ...values,
      name,
      actId: localStorage.getItem("actId"),
      position,
    }

    await ActService.updateActWheel(localStorage.getItem("actId"), dataToSend)
    setRefetch((prev) => !prev)
  }
  return (
    <>
      <Form name="basic" onFinish={onFinish} className="tw-m-4">
        <Row>
          <Col span="12">
            <Form.Item
              label="S/N"
              name="serialNumber"
              rules={[{ required: true, message: "กรุณากรอก Serial Number" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item
              label="ประเภทล้อ"
              name="typeWheel"
              rules={[{ required: true, message: "กรุณากรอก ประเภทล้อ" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <Form.Item
              label="บันทึก"
              name="note"
              rules={[{ required: true, message: "กรุณากรอก บันทึก" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item name="date" label="วันที่">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <Form.Item
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row className="tw-mt-4 ">
          <LogTable source={show} loading={loading} />
        </Row>
      </Form>
    </>
  )
}

export default FormMapper
