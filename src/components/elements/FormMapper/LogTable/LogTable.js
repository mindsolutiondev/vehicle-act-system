import React, { useState, useRef } from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Table, Input, Button } from "antd"
import Highlighter from "react-highlight-words"

const LogTable = ({ source, loading, ...rest }) => {
  const [searchText, setSearchText] = useState("")
  let searchInput = useRef(null)

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node
          }}
          placeholder={`ค้นหา ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select())
      }
    },
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  })

  const handleSearch = (selectedKeys, confirm) => {
    confirm()
    setSearchText(selectedKeys[0])
  }

  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText("")
  }

  const columns = [
    {
      title: "S/N",
      dataIndex: "serialNumber",
      key: "serialNumber",
      width: "15%",
      ...getColumnSearchProps("serialNumber"),
    },
    {
      title: "ชนิดยาง",
      dataIndex: "typeWheel",
      key: "typeWheel",
      width: "25%",
      ...getColumnSearchProps("typeWheel"),
    },
    {
      title: "หมายเหตุ",
      dataIndex: "note",
      key: "note",
      width: "10%",
    },
    {
      title: "วันที่เปลี่ยนยาง",
      dataIndex: "date",
      key: "date",
      width: "20%",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
  ]
  return (
    <Table
      columns={columns}
      dataSource={source}
      pagination={{ pageSize: 5 }}
      loading={loading}
      {...rest}
    />
  )
}

export default LogTable
