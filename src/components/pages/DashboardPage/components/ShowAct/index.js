import React, { useContext, useState } from "react"
import { Steps } from "antd"
import {
  EngineOilInformation,
  OtherInformation,
  BasicInformation,
} from "./Step"

const { Step } = Steps

const ShowAct = ({ actId, closeModal }) => {
  const [step, setStep] = useState(0)

  const toNextStep = () => {
    setStep((s) => s + 1)
  }

  const toPrevStep = () => {
    step === 0 ? closeModal() : setStep((s) => s - 1)
  }

  let propShowAct = {
    actId,
    toNextStep,
    toPrevStep,
    closeModal,
  }

  let renderStep = {
    0: <BasicInformation {...propShowAct} />,
    1: <EngineOilInformation {...propShowAct} />,
    2: <OtherInformation {...propShowAct} />,
  }
  const stepArr = ["ข้อมูลทั่วไป", "ข้อมูลตัวรถ", "ข้อมูลอื่นๆ"]

  const stepList = stepArr.map((st) => <Step key={st} title={st} />)

  return (
    <div>
      <Steps current={step}>{stepList}</Steps>
      {renderStep[step]}
    </div>
  )
}

export default ShowAct
