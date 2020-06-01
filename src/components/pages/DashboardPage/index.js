import { Button, Modal, Popover, Tooltip } from "antd"
import { DeleteContext, StepContext } from "../../../constants/context"
import { FilterTwoTone, PlusOutlined, ReloadOutlined } from "@ant-design/icons"
import React, { useEffect, useState } from "react"

import ActService from "../../../model/act"
import Checkable from "../../elements/checkable"
import Loadable from "react-loadable"
import Loading from "../../elements/Loading"
import get from "lodash.get"
import useDisplayNotification from "./hooks/useDisplayNotification"
import useGetVehicle from "./hooks/useGetVehicle"

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
  let { getVehicle, setRefetch, loading, setFilter } = useGetVehicle()
  const [step, setStep] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  useDisplayNotification({ initials: setShowDrawer })

  const _handleShowModel = async () => {
    setShowModal(!showModal)
    let data = await ActService.postAct()
    let actId = get(data, "data.actId")
    localStorage.setItem("actId", actId)
  }

  const _handleCloseModal = async () => {
    setShowModal(false)
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
        await ActService.delAct(localStorage.getItem("actId"))
        setShowModal(false)
        setStep(0)
      },
    })
  }

  const content = (
    <div>
      <Checkable filter={setFilter} />
    </div>
  )

  useEffect(() => {
    setStep(0)
  }, [])

  return (
    <Template>
      <Boxed>
        <Header name="จัดการข้อมูลทะเบียนรถ">
          <Popover
            placement="left"
            title="กรองข้อมูลตามสถานะ"
            content={content}
          >
            <Button
              style={{ cursor: "default" }}
              type="dashed"
              shape="circle"
              size="large"
            >
              <FilterTwoTone true style={{ marginBottom: "6px" }} />
            </Button>
          </Popover>
          <Tooltip title="รีโหลดข้อมูล">
            <Button
              type="dashed"
              shape="circle"
              size="large"
              className="tw-ml-4"
              onClick={() => setRefetch((prev) => !prev)}
            >
              <ReloadOutlined true style={{ marginBottom: "6px" }} />
            </Button>
          </Tooltip>
          <Tooltip title="เพิ่มข้อมูลทะเบียนรถ">
            <Button
              type="primary"
              shape="circle"
              size="large"
              className="tw-ml-4"
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
            footer={false}
            closeIcon={<div onClick={confirmToClose}>x</div>}
          >
            <AddAct
              setRefetch={setRefetch}
              closeModal={() => _handleCloseModal()}
            />
          </AddActModal>
        </StepContext.Provider>

        <Drawers
          visible={showDrawer}
          close={_handleCloseDrawer}
          style={{ overflowY: "hidden" }}
        >
          <ListNotification />
        </Drawers>
      </Boxed>
    </Template>
  )
}

export default DashboardPage
