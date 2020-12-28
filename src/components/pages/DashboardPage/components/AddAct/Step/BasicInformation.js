import { Col, DatePicker, Divider, Form, Input, Row, Select } from "antd"
import React, { useState } from "react"

import ActService from "../../../../../../model/act"
import Footer from "../../../../../elements/Footer"
import Loading from "../../../../../elements/Loading"
import { typecar } from "../../../../../../constants/typecar"

const { Option } = Select

const BasicInformation = (props) => {
  const { toNextStep, Upload, getCarType, loadingCarType } = props
  const [loading, setLoading] = useState(false)

  const [form] = Form.useForm()

  const onFinish = async (values) => {
    setLoading(true)
    try {
      let dataInformation = {
        ...values,
        actExpireDate: values.actExpireDate.format("YYYY-MM-DD"),
        insureExpireDate: values.insureExpireDate.format("YYYY-MM-DD"),
        datecarmileage: values.datecarmileage.format("YYYY-MM-DD"),
      }
      await ActService.updateActGeneral(
        localStorage.getItem("actId"),
        dataInformation
      )
      toNextStep()
    } catch (err) {
      setLoading(false)
      new Notification("แจ้งเตือน !", {
        body: "เพิ่มข้อมูลไม่สำเร็จ เกิดปัญหาบางประการ",
      })
      form.resetFields()
    }
  }

  const renderTypeVehecal = () => {
    const getCar = getCarType !== false ? getCarType : []
    return (
      getCar &&
      getCar.map((val, index) => (
        <Option value={val.nameActType} key={index}>
          {val.nameActType}
        </Option>
      ))
    )
  }

  const _onUpload = async (name, file) => {
    try {
      await ActService.uploadImages(localStorage.getItem("actId"), {
        [name]: file,
      })
    } catch (err) {
      new Notification("แจ้งเตือน !", {
        body: `อัพโหลดรูปภาพไม่สำเร็จ เกิดปัญหาบางประการดังนี้ ${err.message}`,
      })
    }
  }

  return (
    <div>
      <Divider orientation="left">ข้อมูลทั่วไป</Divider>
      {loading ? (
        <Loading />
      ) : (
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item
            name="licensePlate"
            label="ทะเบียนรถ"
            rules={[{ required: true, message: "กรุณากรอกทะเบียนรถ" }]}
          >
            <Input placeholder="กรุณากรอกทะเบียนรถ" />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item
                name="vehicleType"
                label="ประเภทรถ"
                rules={[{ required: true, message: "กรุณาเลือกประเภทรถ" }]}
              >
                <Select
                  placeholder="กรุณาเลือกประเภทรถ"
                  loading={loadingCarType}
                >
                  {renderTypeVehecal()}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="actExpireDate"
                label="วันที่หมดพ.ร.บ"
                rules={[{ required: true, message: "กรุณาวันที่หมดพ.ร.บ" }]}
              >
                <DatePicker
                  placeholder="กรุณาวันที่หมดพ.ร.บ"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Form.Item
                name="insureExpireDate"
                label="วันที่หมดประกัน"
                rules={[{ required: true, message: "กรุณาวันที่หมดพ.ร.บ" }]}
              >
                <DatePicker
                  placeholder="กรุณาวันที่หมดพ.ร.บ"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="carmileage"
                label="หมายเลขไมล์ปัจจุบัน"
                rules={[{ required: true, message: "กรุณาเลือกประเภทรถ" }]}
              >
                <Input placeholder="กรุณาเลือกประเภทรถ" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="datecarmileage"
                label="วันที่ ณ หมายเลขไมล์ปัจจุบัน"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกวันที่ ณ หมายเลขไมล์ปัจจุบัน",
                  },
                ]}
              >
                <DatePicker
                  placeholder="กรุณากรอกวันที่ ณ หมายเลขไมล์ปัจจุบัน"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="driverName"
                label="ชื่อพนักงานขับรถ"
                rules={[
                  { required: true, message: "กรุณากรอกชื่อพนักงานขับรถ" },
                ]}
              >
                <Input placeholder="กรุณากรอกชื่อพนักงานขับรถ" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="เบอร์โทรศัพท์"
                rules={[{ required: true, message: "กรุณากรอกเบอร์โทรศัพท์" }]}
              >
                <Input placeholder="กรุณากรอกเบอร์โทรศัพท์" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="brands"
                label="ยี่ห้อ"
                rules={[{ required: true, message: "กรุณากรอกยี่ห้อ" }]}
              >
                <Input placeholder="กรุณากรอกยี่ห้อ" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="type"
                label="ประเภท"
                rules={[{ required: true, message: "กรุณากรอกประเภท" }]}
              >
                <Input placeholder="กรุณากรอกประเภท" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="groupcar"
                label="กลุ่มรถ"
                rules={[{ required: true, message: "กรุณากรอกกลุ่มรถ" }]}
              >
                <Input placeholder="กรุณากรอกกลุ่มรถ" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="distance"
            label="ระยะทาง"
            rules={[{ required: true, message: "กรุณากรอกระยะทาง" }]}
          >
            <Input placeholder="กรุณากรอกระยะทาง" />
          </Form.Item>
          <Form.Item label="เล่มรถ">
            <Upload onChange={_onUpload} title="vehicalBook" />
          </Form.Item>
          <Form.Item label="เอกสารประกันภัย">
            <Upload onChange={_onUpload} title="insureDocuments" />
          </Form.Item>
          <Form.Item label="รูปถ่ายรถยนต์">
            <Upload onChange={_onUpload} title="vehicleImg" />
          </Form.Item>

          <Form.Item>
            <Footer
              okText="ถัดไป"
              cancelText="ยกเลิก"
              handleSubmit={() => onFinish}
            />
          </Form.Item>
        </Form>
      )}
    </div>
  )
}

export default BasicInformation
