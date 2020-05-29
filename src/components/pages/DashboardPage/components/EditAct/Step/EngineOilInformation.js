import React, { useState, useEffect } from "react"
import { Tabs, Divider } from "antd"
import Footer from "../../../../../elements/Footer"

import EngineOilForm from "./components/EngineOilForm"
import GearOilForm from "./components/GearOilForm"
import GreaseWheelForm from "./components/GreaseWheelForm"
import RearGearOilForm from "./components/RearGearOilForm"

import { engine } from "../../../../../../constants/engine"
import ActService from "../../../../../../model/act"
import Loading from "../../../../../elements/Loading"
import _get from "lodash.get"

import useGetOneVehicle from "../../../hooks/useGetOneVehicle"

const { TabPane } = Tabs

const EngineOilInformation = ({ toNextStep, actid, toPrevStep }) => {
  const [engineMock, setEngineMock] = useState(engine)
  const [loadings, setLoading] = useState(false)
  let { show, loading } = useGetOneVehicle({
    actId: actid,
    step: 2,
  })

  useEffect(() => {
    setEngineMock(show)
  }, [loading])

  const _onSubmit = async () => {
    try {
      setLoading(true)
      await ActService.updateActStepTwo(actid, engineMock)
      toNextStep()
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const callback = (key) => {
    console.log(key)
  }

  const propsToForm = {
    EngineOil: _get(show, "EngineOil"),
    GearOil: _get(show, "GearOil"),
    GreaseWheel: _get(show, "GreaseWheel"),
    RearGearOil: _get(show, "RearGearOil"),
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
    ...propsToForm,
    loading,
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

      {loadings || loading ? (
        <Loading />
      ) : (
        <Tabs defaultActiveKey="0" onChange={callback}>
          {renderTabPane}
        </Tabs>
      )}
      <Footer
        okText="ถัดไป"
        cancelText="ก่อนหน้า"
        onClickCancel={toPrevStep}
        handleSubmit={_onSubmit}
      />
    </div>
  )
}

export default EngineOilInformation
