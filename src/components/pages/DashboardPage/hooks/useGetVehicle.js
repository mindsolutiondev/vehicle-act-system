import React, { useEffect, useState } from "react"

import ActService from "../../../../model/act"
import _get from "lodash/get"

const useGetVehicle = () => {
  const [filter, setFilter] = useState([])
  const [refetch, setRefetch] = useState(false)
  const [getVehicle, setGetVehicle] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchVehicle = async () => {
    setLoading(true)
    try {
      let vehicle = await ActService.getVehicle(filter)
      setGetVehicle(_get(vehicle, "data.data"))
      setLoading(false)
    } catch (err) {
      new Notification("แจ้งเตือน !", {
        body:
          "ระบบ Database หรือ API เกิดปัญหา กรุณาติดต่อผู้ดูแลระบบเพื่อสอบถามปัญหาที่เกิดขึ้น",
      })
    }
  }
  useEffect(() => {
    fetchVehicle()
  }, [refetch, filter])

  return {
    getVehicle,
    setRefetch,
    loading,
    setFilter,
  }
}

export default useGetVehicle
