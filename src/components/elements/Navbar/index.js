import { Layout, Tooltip } from "antd"
import {
  LogoutOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import React, { useState } from "react"

import Loadable from "react-loadable"
import Menu from "./components/ListMenu"
import Popover from "../Popover"
import styled from "styled-components"
import { withRouter } from "react-router-dom"

const { Header } = Layout

const ListNotification = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "listnotification" */ "../../pages/DashboardPage/components/ListNotification"
    ),
  loading: () => null,
  delay: 0,
})

const HeaderStyled = styled(Header)`
  height: 200px;
  background: linear-gradient(
    to right,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .box {
    display: flex;
    justify-content: flex-end;

    .boxinside {
      margin: 10px;
      width: 34px;
    }
  }
`

const Drawers = Loadable({
  loader: () => import(/* webpackChunkName: "drawer" */ "../Drawer"),
  loading: () => null,
  delay: 10000,
})

const Navbar = (props) => {
  // let toggleVisible = true
  const [showDrawer, setShowDrawer] = useState(false)
  const _handleOpenDrawer = () => {
    setShowDrawer(true)
  }

  const _handleCloseDrawer = () => {
    setShowDrawer(false)
  }

  const _handleLogOut = () => {
    localStorage.clear()
    props.history.push("/")
  }

  return (
    <HeaderStyled className="header">
      <div className="tw-flex tw-justify-end tw-h-20 tw-items-center">
        <Popover
          trigger="hover"
          content={
            <>
              <Menu />
            </>
          }
        >
          <div className="tw-ml-10 tw-cursor-pointer">
            <SettingOutlined className="tw-text-2xl" />
          </div>
        </Popover>
        <div className="tw-ml-10 tw-cursor-pointer" onClick={_handleOpenDrawer}>
          <NotificationOutlined className="tw-text-2xl" />
        </div>
        <div className="tw-ml-10 tw-cursor-pointer" onClick={_handleLogOut}>
          <LogoutOutlined className="tw-text-2xl" />
        </div>
      </div>

      <Drawers visible={showDrawer} close={_handleCloseDrawer}>
        <ListNotification />
      </Drawers>
    </HeaderStyled>
  )
}

export default withRouter(Navbar)
