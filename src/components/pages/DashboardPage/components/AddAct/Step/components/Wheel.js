import React, { useState } from "react"
import { Drawer } from "antd"
import coods from "../../../../../../../constants/coods"
import wheelmap from "../../../../../../../assets/wheelmap.png"
import ImageMapper from "react-image-mapper"
import FormMapper from "./FormMapper/FormMapper"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Wheel = () => {
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
        <FormMapper setOpenForm={setOpenForm} {...mapperProps} />{" "}
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
