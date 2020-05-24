import React, { useState, useEffect } from "react"
import _get from "lodash.get"
import ActService from "../../../../model/act"

const useDisplayNotification = (props) => {
  let getNotification = async () => {
    let resp = await ActService.getActNotification()

    let notification = new Notification(
      "แจ้งเตือนสถานะทะเบียน \n(คลิกเพื่อดูรายละเอียด)",
      {
        body: `ใกล้หมดอายุอีก 15 วัน จำนวน ${_get(
          resp,
          "data.data.amountfifteen"
        )} ทะเบียน \nใกล้หมดอายุอีก 7 วัน จำนวน ${_get(
          resp,
          "data.data.amountcountseven"
        )} ทะเบียน\nหมดอายุแล้ว จำนวน ${_get(
          resp,
          "data.data.amountexpire"
        )} ทะเบียน`,
      }
    )
    notification.addEventListener("click", () => {
      props.initials((prev) => !prev)
    })
  }
  useEffect(() => {
    getNotification()
  }, [])
}

export default useDisplayNotification
