import React, { useState, useEffect } from "react"
import _get from "lodash/get"
import ActService from "../../../../model/act"

const useGetVehicle = () => {
  const [refetch, setRefetch] = useState(false)
  const [getVehicle, setGetVehicle] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchVehicle = async () => {
    setLoading(true)
    try {
      let vehicle = await ActService.getVehicle()

      let sortOrder = ["Expired", "7 Day", "15 Day", "Normal"]

      let sortFinish = _get(vehicle, "data.data").sort(function (a, b) {
        return (
          sortOrder.indexOf(a.statusexpired) -
          sortOrder.indexOf(b.statusexpired)
        )
      })
      setGetVehicle(sortFinish)
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
  }, [refetch])

  return {
    getVehicle,
    setRefetch,
    loading,
  }
}

export default useGetVehicle
