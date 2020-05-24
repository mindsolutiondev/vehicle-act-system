import React, { useState, useEffect } from "react"
import Loadable from "react-loadable"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Tooltip, Modal } from "antd"
import ActService from "../../../model/act"
import Loading from "../../elements/Loading"
import get from "lodash.get"
import { StepContext, DeleteContext } from "../../../constants/context"
import useGetVehicle from "./hooks/useGetVehicle"
import useDisplayNotification from "./hooks/useDisplayNotification"

const ListTable = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Login.page"*/ "./components/ListTable"),
  loading: () => null,
  delay: 0,
})

const Template = Loadable({
  loader: () =>
    import(/* webpackChunkName: "template.page"*/ "../../template/index"),
  loading: () => null,
  delay: 1000,
})

const Header = Loadable({
  loader: () =>
    import(/* webpackChunkName: "template.page"*/ "../../elements/Header"),
  loading: () => null,
  delay: 1000,
})

const Boxed = Loadable({
  loader: () =>
    import(/* webpackChunkName: "template.page"*/ "./components/Box"),
  loading: () => null,
  delay: 1000,
})

const AddActModal = Loadable({
  loader: () =>
    import(/* webpackChunkName: "addActModal" */ "../../elements/Modals"),
  loading: () => null,
  delay: 1000,
})

const AddAct = Loadable({
  loader: () => import(/* webpackChunkName: "addAct" */ "./components/AddAct"),
  loading: () => <Loading />,
  delay: 1000,
})

const Drawers = Loadable({
  loader: () =>
    import(/* webpackChunkName: "drawer" */ "../../elements/Drawer"),
  loading: () => null,
})

const ListNotification = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "listnotification" */ "./components/ListNotification"
    ),
  loading: () => null,
  delay: 0,
})

const DashboardPage = () => {
  let { getVehicle, setRefetch, loading } = useGetVehicle()
  const [step, setStep] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  let getNoti = useDisplayNotification({ initials: setShowDrawer })

  const _handleShowModel = async () => {
    setShowModal(!showModal)
    let data = await ActService.postAct()
    let actId = get(data, "data.actId")
    localStorage.setItem("actId", actId)
  }

  const _handleCloseModal = async () => {
    setShowModal(false)
  }

  const _handleOpenDrawer = () => {
    setShowDrawer(true)
  }

  const _handleCloseDrawer = () => {
    setShowDrawer(false)
  }

  const confirmToClose = () => {
    Modal.confirm({
      title: "คุณแน่ใจหรือไม่ว่าต้องการออกจากหน้าเพิ่มข้อมูลทะเบียนรถ ?",
      content: "ข้อมูลที่ท่านกรอกล่าสุดจะถูกลบทันที",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        let data = await ActService.delAct(localStorage.getItem("actId"))
        setShowModal(false)
        setStep(0)
      },
    })
  }

  useEffect(() => {
    setStep(0)
  }, [])

  return (
    <Template>
      <Boxed>
        <Header name="จัดการข้อมูลทะเบียนรถ">
          <Tooltip title="เพิ่มข้อมูลทะเบียนรถ">
            <Button
              type="primary"
              shape="circle"
              size="large"
              onClick={() => _handleShowModel()}
            >
              <PlusOutlined style={{ marginBottom: "6px" }} />
            </Button>
          </Tooltip>
        </Header>
        <DeleteContext.Provider value={{ setRefetch, step, setStep }}>
          <ListTable
            source={getVehicle}
            loading={loading}
            setRefetch={setRefetch}
          />
        </DeleteContext.Provider>
        <StepContext.Provider value={{ step, setStep }}>
          <AddActModal
            destroyOnClose={true}
            title="เพิ่มข้อมูลทะเบียน"
            visible={showModal}
            footer={true}
            closeIcon={<div onClick={confirmToClose}>x</div>}
          >
            <AddAct
              setRefetch={setRefetch}
              closeModal={() => _handleCloseModal()}
            />
          </AddActModal>
        </StepContext.Provider>

        <Drawers visible={showDrawer} close={_handleCloseDrawer}>
          <ListNotification />
        </Drawers>
      </Boxed>
    </Template>
  )
}

export default DashboardPage
