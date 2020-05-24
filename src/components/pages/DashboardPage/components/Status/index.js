import React, { Fragment, useState } from 'react'
import { Avatar, Tooltip } from 'antd'
import moment from 'moment'

const Status = ({ date }) => {
  const [ title ] = useState({
    yellow: 'เหลือเวลาหมดอายุใน 15 วัน',
    orange: 'เหลือเวลาอีก 7 วัน กำลังจะหมดอายุ',
    red: 'หมดอายุแล้ว'
  })
  let validation = (dates) => {
    let start = moment(dates); 
    let end = moment(moment().format("YYYY-MM-DD"));
    let result = start.diff(end, 'days');

    if(result <= 15 && result > 7) {
      return (
        <Tooltip placement="topLeft" title={title.yellow}>
          <Avatar style={{ backgroundColor: 'yellow', verticalAlign: 'middle' }} size="10">
          </Avatar>
        </Tooltip>
      )
    } else if (result <= 7 && result >= 1) {
      return (
        <Tooltip placement="topLeft" title={title.orange}>
          <Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size="10">
          </Avatar>
        </Tooltip>
      )
    } else if (result > 15) {
      return (
        <Fragment />
      )
    } else if (result === 0) {
      return (
        <Tooltip placement="topLeft" title={title.red}>
          <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="10">
          </Avatar>
        </Tooltip>
      )
    } else {
      return (
        <Tooltip placement="topLeft" title={title.red}>
          <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="10">
          </Avatar>
        </Tooltip>      
      )
    }
  }
  
  return (
    <Fragment>
      {validation(date)}
    </Fragment>
  )
}


export default Status