import React, { useState } from "react"
import { Drawer } from "antd"
import coods from "../../../../../../../constants/coods"
import wheelmap from "../../../../../../../assets/wheelmap.png"
import ImageMapper from "react-image-mapper"
import FormMapper from "./FormMapper/FormMapper"

const Wheel = ({ actId }) => {
  const [openForm, setOpenForm] = useState(false)
  const [dataMapper, setDataMapper] = useState({})
  const openDrawer = (area) => {
    setOpenForm(true)
    setDataMapper(area)
  }
  const RenderFormMapper = (data) => {
    const { name, position } = data
    let mapperProps = {
      name,
      position,
      actId,
    }
    return (
      <Drawer
        title={name}
        placement="right"
        width={720}
        closable={false}
        onClose={() => setOpenForm(false)}
        visible={openForm}
      >
        <FormMapper toggleOpenForm setOpenForm={setOpenForm} {...mapperProps} />
      </Drawer>
    )
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageMapper
          src={wheelmap}
          map={coods}
          width={700}
          onClick={(area) => openDrawer(area)}
        />
        {openForm && RenderFormMapper(dataMapper)}
      </div>
    </>
  )
}

export default Wheel
