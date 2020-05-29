import React, { useState } from "react"

import AddActType from "../AddActType"
import Modal from "../../../Modals"
import PopoverMenu from "./components/PopoverMenu"
import { withRouter } from "react-router-dom"

const ListMenu = (props) => {
  const [showModal, setShowModal] = useState(false)

  const _showModal = () => {
    setShowModal(true)
  }

  const _handleOk = () => {
    setShowModal(false)
  }

  const _handleCancel = () => {
    setShowModal(false)
  }

  const headerMenu = [
    {
      title: "เพิ่มประเภทรถ",
      onClick: _showModal,
    },
  ]

  return (
    <>
      <Modal
        destroyOnClose={true}
        title="จัดการข้อมูลประเภทรถยนต์"
        visible={showModal}
        onOk={() => _handleOk()}
        onCancel={() => _handleCancel()}
        footer={true}
      >
        <AddActType setModal={setShowModal} />
      </Modal>
      <PopoverMenu items={headerMenu} />
    </>
  )
}

export default withRouter(ListMenu)
