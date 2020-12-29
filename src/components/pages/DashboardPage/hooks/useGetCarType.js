import React, { useEffect, useState } from "react"

import ActService from "../../../../model/act"
import _get from "lodash/get"

const useGetCarType = () => {
  const [getCarType, setCarType] = useState([])
  const [loadingCarType, setLoadingCarType] = useState(false)

  const fetchCarType = async () => {
    setLoadingCarType(true)
    try {
      let vehicle = await ActService.getCarType()
      console.log(vehicle)
      setCarType(_get(vehicle, "data.data"))
      setLoadingCarType(false)
    } catch (err) {
      new Notification("แจ้งเตือน !", {
        body:
          "ระบบ Database หรือ API เกิดปัญหา กรุณาติดต่อผู้ดูแลระบบเพื่อสอบถามปัญหาที่เกิดขึ้น",
      })
    }
  }
  useEffect(() => {
    fetchCarType()
  }, [])

  return {
    getCarType,
    loadingCarType,
  }
}

export default useGetCarType
