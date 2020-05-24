import React, { useState, useEffect } from "react"
import { Form, Input, Row, Col, DatePicker, Divider, Select } from "antd"
import moment from "moment"
import _get from "lodash.get"
import { typecar } from "../../../../../../constants/typecar"
import Footer from "../../../../../elements/Footer"
import ActService from "../../../../../../model/act"
import useGetOneVehicle from "../../../hooks/useGetOneVehicle"

const { Option } = Select

const BasicInformation = (props) => {
  const { closeModal, toNextStep, Upload, actid } = props
  const [form] = Form.useForm()
  let { show } = useGetOneVehicle({ actId: actid, step: 1 })

  useEffect(() => {
    form.setFieldsValue({ licensePlate: _get(show, "licensePlate", "-") })
    form.setFieldsValue({ vehicleType: _get(show, "vehicleType", "-") })
    form.setFieldsValue({ carmileage: _get(show, "carmileage", "-") })
    form.setFieldsValue({ distance: _get(show, "distance", "-") })
    form.setFieldsValue({ driverName: _get(show, "driverName", "-") })
    form.setFieldsValue({ groupcar: _get(show, "groupcar", "-") })
    form.setFieldsValue({
      brands: _get(show, "brands", "-"),
    })
    form.setFieldsValue({ phone: _get(show, "phone", "-") })
    form.setFieldsValue({ type: _get(show, "type", "-") })
    form.setFieldsValue({ vehicleType: _get(show, "vehicleType", "-") })
  }, [show])

  const [triggerUpload, setTriggerUpload] = useState(false)
  const [loading, setLoading] = useState(false)

  const [fileBlob, setFileBlob] = useState({
    vehicalBook: "",
    insureDocuments: "",
    vehicleImg: "",
  })
  const [data, setData] = useState({})

  const onFinish = async (values) => {
    setLoading(true)
    try {
      let dataInformation = {
        ...values,
        ...fileBlob,
        actExpireDate: values.actExpireDate.format("YYYY-MM-DD"),
        insureExpireDate: values.insureExpireDate.format("YYYY-MM-DD"),
        datecarmileage: values.datecarmileage.format("YYYY-MM-DD"),
      }
      await ActService.updateActGeneral(
        localStorage.getItem("actId"),
        dataInformation
      )
      setTriggerUpload(true)
      setLoading(true)
      toNextStep()
    } catch (err) {
      setLoading(false)
      new Notification("แจ้งเตือน !", {
        body: "เพิ่มข้อมูลไม่สำเร็จ เกิดปัญหาบางประการ",
      })
      setTriggerUpload(true)
      form.resetFields()
      setFileBlob({
        vehicalBook: "",
        insureDocuments: "",
        vehicleImg: "",
      })
    }
  }

  const renderTypeVehecal = (data) => {
    return data.typecar.map((val, index) => (
      <Option value={val} key={index}>
        {val}
      </Option>
    ))
  }

  const _onUpload = (name, file) => {
    setFileBlob({ ...fileBlob, [name]: file })
  }

  return (
    <div>
      <Divider orientation="left">ข้อมูลทั่วไป</Divider>

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
              <Select placeholder="กรุณาเลือกประเภทรถ">
                {renderTypeVehecal(typecar)}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="actExpireDate"
              label="วันที่หมดพ.ร.บ"
              rules={[{ required: true, message: "กรุณาวันที่หมดพ.ร.บ" }]}
              initialValue={moment(_get(show, "actExpireDate"))}
            >
              <DatePicker
                defaultPickerValue={moment(_get(show, "actExpireDate"))}
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
              initialValue={moment(_get(show, "insureExpireDate"))}
            >
              <DatePicker
                defaultValue={moment(_get(show, "insureExpireDate"))}
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
              initialValue={moment(_get(show, "datecarmileage"))}
            >
              <DatePicker
                value={moment(_get(show, "datecarmileage"))}
                placeholder="กรุณากรอกวันที่ ณ หมายเลขไมล์ปัจจุบัน"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="driverName"
              label="ชื่อพนักงานขับรถ"
              rules={[{ required: true, message: "กรุณากรอกชื่อพนักงานขับรถ" }]}
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
          <Upload
            preview={_get(show, "vehicalBook")}
            onChange={_onUpload}
            title="vehicalBook"
            trigger={triggerUpload}
          />
        </Form.Item>
        <Form.Item label="เอกสารประกันภัย">
          <Upload
            preview={_get(show, "insureDocuments")}
            onChange={_onUpload}
            title="insureDocuments"
            trigger={triggerUpload}
          />
        </Form.Item>
        <Form.Item label="รูปถ่ายรถยนต์">
          <Upload
            preview={_get(show, "vehicleImg")}
            onChange={_onUpload}
            title="vehicleImg"
            trigger={triggerUpload}
          />
        </Form.Item>

        <Form.Item>
          <Footer
            okText="ถัดไป"
            cancelText="ยกเลิก"
            handleSubmit={() => onFinish}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default BasicInformation
