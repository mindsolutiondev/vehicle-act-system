import React from "react"
import Footer from "../../../../../elements/Footer"
import BasicInformationForm from "./Form/BasicInformationForm"

const BasicInformation = ({ actId, toNextStep, toPrevStep }) => {
  return (
    <div>
      <div className="tw-w-full tw-mt-8 tw-mb-8">
        <BasicInformationForm actId={actId} />
      </div>
      <Footer
        okText="ถัดไป"
        cancelText="ปิด"
        onClickCancel={toPrevStep}
        handleSubmit={toNextStep}
      />
    </div>
  )
}

export default BasicInformation
