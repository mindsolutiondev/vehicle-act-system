import { Divider, Input, notification } from "antd"
import React, { useContext, useState } from "react"

import ActService from "../../../../../../model/act"
import { DeleteContext } from "../../../../../../constants/context"
import Footer from "../../../../../elements/Footer"
import Loading from "../../../../../elements/Loading"
import Wheel from "./components/Wheel"
import _get from "lodash/get"
import useGetOneVehicle from "../../../hooks/useGetOneVehicle"

const OtherInformation = ({ closeModal, setStep, actid, toPrevStep }) => {
  const [getText, setText] = useState("")
  const [loadings, setLoadings] = useState(false)
  const { show, loading } = useGetOneVehicle({ actId: actid, step: 3 })

  const context = useContext(DeleteContext)

  let details = _get(show, "details", "-")
  const _onSubmit = async (values) => {
    try {
      setLoadings(true)
      await ActService.updateOtherDetailStepThree(actid, { details: getText })
      await context.setRefetch((prev) => !prev)
      new Notification("สำเร็จ !", {
        body: "แก้ไขข้อมูลทะเบียนรถสำเร็จ",
      })
      setLoadings(false)
      setStep(0)
      closeModal()
    } catch (err) {
      setLoadings(true)
      new Notification("สำเร็จ !", {
        body: `เกิดปัญหาในการแก้ไขข้อมูลทะเบียนรถดังนี้ \n message: ${err.message}`,
      })
      setLoadings(false)
    }
  }
  return (
    <div>
      {loadings || loading ? (
        <Loading />
      ) : (
        <>
          <Divider orientation="left">รายละเอียดล้อยาง</Divider>
          <Wheel actId={actid} />
          <Divider orientation="left">หมายเหตุ</Divider>
          <div style={{ marginBottom: "20px" }}>
            <Input.TextArea
              defaultValue={details}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </>
      )}
      <Footer
        okText="ตกลง"
        cancelText="ก่อนหน้า"
        handleSubmit={_onSubmit}
        onClickCancel={toPrevStep}
      />
    </div>
  )
}

export default OtherInformation
