import React, { useState } from "react"
import { Tabs, Divider } from "antd"
import Footer from "../../../../../elements/Footer"
import Loading from "../../../../../elements/Loading"
import _get from "lodash.get"
import EngineOilForm from "./components/EngineOilForm"
import GearOilForm from "./components/GearOilForm"
import GreaseWheelForm from "./components/GreaseWheelForm"
import RearGearOilForm from "./components/RearGearOilForm"
import useGetOneVehicle from "../../../hooks/useGetOneVehicle"

const { TabPane } = Tabs

const EngineOilInformation = ({ actId, toNextStep, toPrevStep }) => {
  const [loading, setLoading] = useState(false)
  let { show } = useGetOneVehicle({ actId, step: 2 })

  const callback = (key) => {}

  const tabArr = [
    "น้ำมันเครื่อง",
    "น้ำมันเกียร์",
    "จารบีล้อ",
    "น้ำมันเฟืองท้าย",
  ]

  const propsToForm = {
    EngineOil: _get(show, "EngineOil"),
    GearOil: _get(show, "GearOil"),
    GreaseWheel: _get(show, "GreaseWheel"),
    RearGearOil: _get(show, "RearGearOil"),
  }

  const renderStep = {
    0: <EngineOilForm {...propsToForm} />,
    1: <GearOilForm {...propsToForm} />,
    2: <GreaseWheelForm {...propsToForm} />,
    3: <RearGearOilForm {...propsToForm} />,
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
      <Footer
        okText="ถัดไป"
        cancelText="ย้อนกลับ"
        onClickCancel={toPrevStep}
        handleSubmit={toNextStep}
      />
    </div>
  )
}

export default EngineOilInformation
