import React, { useEffect, useState } from 'react'
import { Table, Divider, Tag } from 'antd'
import ActService from '../../../../../model/act'
import PopConfirms from '../../../Popconfirm/index'
import { useGlobal } from 'reactn'

const columns = [
  {
    title: 'ประเภทรถยนต์',
    dataIndex: 'nameacttype',
    key: 'nameacttype',
    render: text => <a>{text}</a>,
  },
  {
    title: 'การกระทำ',
    key: 'action',
    render: text => (
      <span>
        <Divider type="vertical" />
        <PopConfirms data={text.id} />
      </span>
    ),
  },
]

const Tables = props => {
  let [actType, setActType] = useGlobal('actType')
  useEffect(() => {
    const fetchAllAct = async () => {
      const act = await ActService.getActType()
      setActType(act.data.getAllAct)
    }

    fetchAllAct()
  }, [props.data])
  return (
    <Table
      columns={columns}
      dataSource={actType}
      pagination={{
        defaultPageSize: 5,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '15'],
      }}
    />
  )
}

export default Tables
