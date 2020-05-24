import React from "react"
import { Card } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import LogTable from "./LogTable/LogTable"
import useGetOneVehicle from "../../pages/DashboardPage/hooks/useGetOneVehicle"

const FormMapper = (props) => {
  const { actId, name, position } = props
  const { show, loading } = useGetOneVehicle({
    actId,
    step: 3,
    other: { name: name, position: position },
  })

  return <LogTable source={show} loading={loading} scroll={{ y: 500 }} />
}

export default FormMapper
