import React from "react"
import { Divider, Input } from "antd"
import Footer from "../../../../../elements/Footer"
import Wheel from "../../../../../elements/Wheel"
import _get from "lodash/get"
import useGetOneVehicle from "../../../hooks/useGetOneVehicle"

const OtherInformation = ({ actId, toNextStep, toPrevStep, closeModal }) => {
  let { show } = useGetOneVehicle({ actId, step: 3 })
  return (
    <div>
      <Divider orientation="left">รายละเอียดล้อยาง</Divider>
      <div className="tw-w-full">
        <Wheel actId={actId} />
      </div>
      <Divider orientation="left">หมายเหตุ</Divider>
      <div style={{ marginBottom: "20px" }}>
        <Input.TextArea value={_get(show, "details")} disabled />
      </div>
      <Footer
        okText="ปิด"
        cancelText="ย้อนกลับ"
        onClickCancel={toPrevStep}
        handleSubmit={closeModal}
      />
    </div>
  )
}

export default OtherInformation
