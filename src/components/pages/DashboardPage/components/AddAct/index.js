import React, { useContext, useEffect, useState } from "react"

import BasicInformation from "./Step/BasicInformation"
import EngineOilInformation from "./Step/EngineOilInformation"
import Loadable from "react-loadable"
import OtherInformation from "./Step/OtherInformation"
import { StepContext } from "../../../../../constants/context"
import { Steps } from "antd"
import useGetCarType from "../../hooks/useGetCarType"
import ErrorBoundary from "../../../../../core/ErrorBoundary"

const { Step } = Steps

const Upload = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "upload" */ "../../../../../components/elements/Upload"
    ),
  loading: () => null,
  delay: 1000,
})

const Loading = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "upload" */ "../../../../../components/elements/Loading"
    ),
  loading: () => null,
  delay: 0,
})

const AddAct = (props) => {
  const { closeModal, setRefetch } = props
  let { step, setStep } = useContext(StepContext)
  let { getCarType, loadingCarType } = useGetCarType()
  const toNextStep = () => {
    setStep((s) => s + 1)
  }

  const toPrevStep = () => {
    step === 0 ? closeModal() : setStep((s) => s - 1)
  }

  const stepProps = {
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
    <ErrorBoundary>
      <>
        <Steps current={step}>{stepList}</Steps>
        {renderStep[step]}
      </>
    </ErrorBoundary>
  )
}

export default AddAct
