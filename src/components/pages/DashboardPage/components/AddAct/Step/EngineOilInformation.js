import React, { useState } from "react"
import { Tabs, Divider } from "antd"
import Footer from "../../../../../elements/Footer"

import EngineOilForm from "./components/EngineOilForm"
import GearOilForm from "./components/GearOilForm"
import GreaseWheelForm from "./components/GreaseWheelForm"
import RearGearOilForm from "./components/RearGearOilForm"

import { engine } from "../../../../../../constants/engine"
import ActService from "../../../../../../model/act"
import Loading from "../../../../../elements/Loading"

const { TabPane } = Tabs

const EngineOilInformation = ({ toNextStep }) => {
  const [engineMock, setEngineMock] = useState(engine)
  const [loading, setLoading] = useState(false)

  const _onSubmit = async () => {
    try {
      setLoading(true)
      await ActService.updateActStepTwo(
        localStorage.getItem("actId"),
        engineMock
      )
      toNextStep()
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const callback = (key) => {
    console.log(key)
  }
  const tabArr = [
    "น้ำมันเครื่อง",
    "น้ำมันเฟืองท้าย",
    "น้ำมันเกียร์",
    "จารบีล้อ",
  ]
  const engineProps = {
    setEngineMock,
    engineMock,
  }
  const renderStep = {
    0: <EngineOilForm {...engineProps} />,
    1: <GearOilForm {...engineProps} />,
    2: <GreaseWheelForm {...engineProps} />,
    3: <RearGearOilForm {...engineProps} />,
  }
  const renderTabPane = tabArr.map((val, index) => (
    <TabPane tab={val} key={index}>
      {renderStep[index]}
    </TabPane>
  ))
  return (
    <div>
      <Divider orientation="left">ข้อมูลตัวรถ</Divider>

      {loading ? (
        <Loading />
      ) : (
        <Tabs defaultActiveKey="0" onChange={callback}>
          {renderTabPane}
        </Tabs>
      )}
      <Footer okText="ถัดไป" cancelText="ก่อนหน้า" handleSubmit={_onSubmit} />
    </div>
  )
}

export default EngineOilInformation
