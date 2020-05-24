import React, { useState } from "react"
import { Drawer } from "antd"
import coods from "../../constants/coods"
import styled from "styled-components"
import wheelmap from "../../assets/wheelmap.png"
import FormMapper from "./FormMapper/FormMapper"
import ImageMapper from "react-image-mapper"

const Container = styled.div`
  display: flex;
  justify-content: center;
`
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
      setOpenForm,
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
        <FormMapper {...mapperProps} />
      </Drawer>
    )
  }
  return (
    <>
      <Container>
        <ImageMapper
          src={wheelmap}
          map={coods}
          width={700}
          onClick={(area) => openDrawer(area)}
        />
      </Container>
      {openForm && RenderFormMapper(dataMapper)}
    </>
  )
}

export default Wheel
