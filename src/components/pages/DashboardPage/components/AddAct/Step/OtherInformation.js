import React, { useState } from "react"
import Footer from "../../../../../elements/Footer"
import Wheel from "./components/Wheel"
import { Divider, Input, notification } from "antd"
import ActService from "../../../../../../model/act"
import Loading from "../../../../../elements/Loading"

const OtherInformation = ({ closeModal, setStep, setRefetch }) => {
  const [getText, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const _onSubmit = async (values) => {
    try {
      setLoading(true)
      await ActService.updateOtherDetailStepThree(
        localStorage.getItem("actId"),
        { details: getText }
      )
      await setRefetch((prev) => !prev)
      notification.success({
        message: "เพิ่มข้อมูลทะเบียนรถสำเร็จ",
      })
      setLoading(false)
      setStep(0)
      closeModal()
    } catch (err) {
      setLoading(true)
      notification.success({
        message: `เกิดปัญหาในการเพิ่มข้อมูลดังนี้ \n message: ${err.message}`,
      })
      setLoading(false)
    }
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Divider orientation="left">รายละเอียดล้อยาง</Divider>
          <Wheel />
          <Divider orientation="left">หมายเหตุ</Divider>
          <div style={{ marginBottom: "20px" }}>
            <Input.TextArea onChange={(e) => setText(e.target.value)} />
          </div>
        </>
      )}
      <Footer okText="ตกลง" cancelText="ก่อนหน้า" handleSubmit={_onSubmit} />
    </div>
  )
}

export default OtherInformation
