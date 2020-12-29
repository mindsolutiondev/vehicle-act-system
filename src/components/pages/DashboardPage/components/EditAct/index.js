import React, { useState, useEffect, useContext } from "react"
import { Steps } from "antd"

import BasicInformation from "./Step/BasicInformation"
import EngineOilInformation from "./Step/EngineOilInformation"
import OtherInformation from "./Step/OtherInformation"

import Loadable from "react-loadable"
import { DeleteContext } from "../../../../../constants/context"
import useGetCarType from "../../hooks/useGetCarType"

const { Step } = Steps

const Upload = Loadable({
  loader: () =>
    import(/* webpackChunkName: "upload" */ "../../../../elements/Upload"),
  loading: () => null,
  delay: 1000,
})

const Loading = Loadable({
  loader: () =>
    import(/* webpackChunkName: "upload" */ "../../../../elements/Loading"),
  loading: () => null,
  delay: 0,
})

const EditAct = (props) => {
  const { closeModal, setRefetch, actid } = props
  const { step, setStep } = useContext(DeleteContext)
  let { getCarType, loadingCarType } = useGetCarType()

  const toNextStep = () => {
    setStep((s) => s + 1)
  }

  const toPrevStep = () => {
    step === 0 ? closeModal() : setStep((s) => s - 1)
  }

  const stepProps = {
    actid,
    closeModal,
    toNextStep,
    toPrevStep,
    Upload,
    setStep,
    setRefetch,
    getCarType,
    loadingCarType,
  }

  const stepArr = ["ข้อมูลทั่วไป", "ข้อมูลตัวรถ", "ข้อมูลอื่นๆ"]

  let renderStep = {
    0: <BasicInformation {...stepProps} />,
    1: <EngineOilInformation {...stepProps} />,
    2: <OtherInformation {...stepProps} />,
  }

  const stepList = stepArr.map((st) => <Step key={st} title={st} />)

  return (
    <div>
      <>
        <Steps current={step}>{stepList}</Steps>
        {renderStep[step]}
      </>
    </div>
  )
}

export default EditAct
