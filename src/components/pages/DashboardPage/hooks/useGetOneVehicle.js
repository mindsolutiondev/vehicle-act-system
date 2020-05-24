import React, { useEffect, useState } from "react"
import _get from "lodash/get"
import _isEmpty from "lodash/isEmpty"
import ActService from "../../../../model/act"

const useGetOneVehicle = ({ actId, step, other }) => {
  const [data, setData] = useState({})
  const [dataArray, setDataArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [refetch, setRefetch] = useState(false)

  const renderVehicle = async () => {
    if ([1, 2, 3].includes(step)) {
      if (step === 1) {
        setLoading(true)
        let data = await ActService.getVehicleById(actId)
        setData(_get(data, "data.data[0]"))
        setLoading(false)
      } else if (step === 2) {
        setLoading(true)
        let data = await ActService.getVehicleStepTwo(actId)
        setData(_get(data, "data.data"))
        setLoading(false)
      } else if (step === 3) {
        setLoading(true)
        if (other) {
          let data = await ActService.getWheelStepThree(
            actId,
            other.name,
            other.position
          )
          setDataArray(_get(data, "data.data"))
        } else {
          let data = await ActService.getVehicleStepThree(actId)
          setData(_get(data, "data.data"))
        }
        setLoading(false)
      }
    } else {
      let data = await ActService.getVehicleById(actId)
      setData(_get(data, "data.data"))
    }
  }
  useEffect(() => {
    renderVehicle()
  }, [step, refetch])

  return {
    show: _isEmpty(data) ? dataArray : data,
    loading,
    setRefetch,
  }
}

export default useGetOneVehicle
