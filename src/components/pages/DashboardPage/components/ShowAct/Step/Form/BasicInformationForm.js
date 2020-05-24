import React from "react"
import { Form, Input, Row, Col, Card, Divider } from "antd"
import _get from "lodash.get"
import useGetOneVehicle from "../../../../hooks/useGetOneVehicle"

const BasicInformationForm = ({ actId }) => {
  const [form] = Form.useForm()
  let { show } = useGetOneVehicle({ actId, step: 1 })

  return (
    <div>
      <Divider orientation="left">ข้อมูลทั่วไป</Divider>

      <Form layout="vertical" form={form}>
        <Form.Item label="ทะเบียนรถ">
          <Input
            placeholder="input placeholder"
            value={_get(show, "licensePlate", "-")}
            disabled
          />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Form.Item label="ประเภทรถ">
              <Input
                placeholder="input placeholder"
                value={_get(show, "vehicleType", "-")}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="วันที่หมดพ.ร.บ">
              <Input
                placeholder="input placeholder"
                value={_get(show, "actExpireDate", "-")}
                disabled
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item label="วันที่หมดประกัน">
              <Input
                placeholder="input placeholder"
                value={_get(show, "insureExpireDate", "-")}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="หมายเลขไมล์ปัจจุบัน">
              <Input
                placeholder="input placeholder"
                value={_get(show, "carmileage", "-")}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="วันที่ ณ หมายเลขไมล์ปัจจุบัน">
              <Input
                placeholder="input placeholder"
                value={_get(show, "datecarmileage", "-")}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="ชื่อพนักงานขับรถ">
              <Input
                placeholder="input placeholder"
                value={_get(show, "driverName", "-")}
                disabled
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item label="เบอร์โทรศัพท์">
              <Input
                placeholder="input placeholder"
                value={_get(show, "phone", "-")}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ยี่ห้อ">
              <Input
                placeholder="input placeholder"
                value={_get(show, "brands", "-")}
                disabled
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item label="ประเภท">
              <Input
                placeholder="input placeholder"
                value={_get(show, "type", "-")}
                disabled
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="กลุ่มรถ">
              <Input
                placeholder="input placeholder"
                value={_get(show, "groupcar", "-")}
                disabled
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="ระยะทาง">
          <Input
            placeholder="input placeholder"
            value={_get(show, "distance", "-")}
            disabled
          />
        </Form.Item>
        <Row gutter={16} style={{ marginRight: "2px", marginTop: "24px" }}>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="example" src={_get(show, "vehicalBook", "-")} />}
            >
              ทะเบียนรถ
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={
                <img alt="example" src={_get(show, "insureDocuments", "-")} />
              }
            >
              เอกสารประกันภัย
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="example" src={_get(show, "vehicleImg", "-")} />}
            >
              รถยนต์
            </Card>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default BasicInformationForm
