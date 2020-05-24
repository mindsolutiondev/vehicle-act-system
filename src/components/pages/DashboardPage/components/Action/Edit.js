import React, { Fragment, useState } from "react"
import { Button } from "antd"
import Loadable from "react-loadable"
import Loading from "../../../../elements/Loading"

const EditActModal = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "editActModal" */ "../../../../elements/Modals"
    ),
  loading: () => null,
  delay: 1000,
})

const EditAct = Loadable({
  loader: () => import(/* webpackChunkName: "editAct" */ "../EditAct/index"),
  loading: () => <Loading />,
  delay: 10000,
})

const Edit = ({ id }) => {
  const [showModal, setShowModal] = useState(false)

  const _handleOpen = () => {
    setShowModal(!showModal)
  }

  const _handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <Button
        type="primary"
        size="small"
        onClick={_handleOpen}
        style={{ marginRight: "5px" }}
      >
        แก้ไข
      </Button>

      <EditActModal
        className="site-drawer-render-in-current-wrapper"
        destroyOnClose={true}
        title="แก้ไขข้อมูลทะเบียน"
        visible={showModal}
        closeIcon={<div onClick={_handleCloseModal}>x</div>}
      >
        <EditAct actid={id} closeModal={() => _handleCloseModal()} />
      </EditActModal>
    </Fragment>
  )
}

export default Edit
