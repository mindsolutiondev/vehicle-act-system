import React, { useState } from "react"
import { Button } from "antd"
import Modals from "../../../../elements/Modals"
import ShowAct from "../ShowAct"

const Show = ({ id }) => {
  const [showModal, setShowModal] = useState(false)

  const _handleOpen = () => {
    setShowModal(!showModal)
  }

  const _handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button
        type="primary"
        size="small"
        onClick={_handleOpen}
        style={{ marginRight: "5px" }}
      >
        ดูข้อมูล
      </Button>
      <Modals
        destroyOnClose={true}
        title="รายละเอียดทะเบียนรถ"
        visible={showModal}
        onCancel={() => _handleCloseModal()}
      >
        <ShowAct actId={id} closeModal={_handleCloseModal} />
      </Modals>
    </>
  )
}

export default Show
