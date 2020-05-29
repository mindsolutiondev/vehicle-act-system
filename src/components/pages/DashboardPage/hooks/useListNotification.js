import React, { useEffect, useState } from "react"

import ActService from "../../../../model/act"
import _get from "lodash.get"

const useListNotification = () => {
  let [service, setService] = useState([])
  let [loading, setLoading] = useState(false)
  let [refetch, setRefetch] = useState(false)
  let [filter, setFilter] = useState([])
  const fetchNotification = async () => {
    try {
      setLoading(true)
      let service = await ActService.getNotification(filter)
      let actService = _get(service, "data.data")
      setLoading(false)
      setService(actService)
    } catch (err) {
      new Notification("แจ้งเตือน !", {
        body:
          "ระบบ Database หรือ API เกิดปัญหา กรุณาติดต่อผู้ดูแลระบบเพื่อสอบถามปัญหาที่เกิดขึ้น",
      })
    }
  }
  useEffect(() => {
    fetchNotification()
  }, [refetch, filter])

  return {
    service,
    loading,
    setRefetch,
    setFilter,
  }
}

export default useListNotification
