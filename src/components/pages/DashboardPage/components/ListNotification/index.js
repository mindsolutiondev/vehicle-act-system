import { Button, Tooltip } from "antd"
import React, { Fragment } from "react"

import CheckableTag from "./components/checkable"
import List from "./components/list"
import Loading from "../../../../elements/Loading"
import { ReloadOutlined } from "@ant-design/icons"
import useListNotification from "../../hooks/useListNotification"

const ListNotification = () => {
  let { service, loading, setRefetch, setFilter } = useListNotification()
  return (
    <div>
      <div className="tw-flex tw-items-center tw-flex-row-reverse tw-justify-between">
        <Button
          shape="circle"
          onClick={(e) => setRefetch((prev) => !prev)}
          icon={
            <ReloadOutlined
              style={{ position: "absolute", top: "6px", left: "7px" }}
            />
          }
        />
        <CheckableTag filter={setFilter} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="tw-overflow-y-scroll"
          style={{ height: "calc(80vh)", transform: "none" }}
        >
          <List data={service} />
        </div>
      )}
    </div>
  )
}

export default ListNotification
