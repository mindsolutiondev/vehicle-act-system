import React, { useState, useRef } from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Table, Input, Button } from "antd"
import Highlighter from "react-highlight-words"
import Loadable from "react-loadable"

const ListExpanded = Loadable({
  loader: () => import(/* webpackChunkName: "List.Expanded"*/ "./ListExpanded"),
  loading: () => null,
  delay: 1000,
})

const Action = Loadable({
  loader: () => import(/* webpackChunkName: "Action.Act"*/ "./Action"),
  loading: () => null,
  delay: 1000,
})

const Status = Loadable({
  loader: () => import(/* webpackChunkName: "Status.Act"*/ "./Status"),
  loading: () => null,
  delay: 1000,
})

const ListTable = ({ source, loading, setRefetch }) => {
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
      title: "ทะเบียนรถ",
      dataIndex: "licensePlate",
      key: "licensePlate",
      width: "15%",
      ...getColumnSearchProps("licensePlate"),
    },
    {
      title: "ประเภทรถ",
      dataIndex: "vehicleType",
      key: "vehicleType",
      width: "25%",
      ...getColumnSearchProps("vehicleType"),
    },
    {
      title: "ระยะทาง",
      dataIndex: "distance",
      key: "distance",
      width: "10%",
    },
    {
      title: "วันที่หมดพรบ",
      dataIndex: "actExpireDate",
      key: "actExpireDate",
      width: "20%",
      sorter: (a, b) => new Date(a.actExpireDate) - new Date(b.actExpireDate),
    },
    {
      title: "วันที่หมดประกัน",
      dataIndex: "insureExpireDate",
      key: "insureExpireDate",
      width: "20%",
      sorter: (a, b) =>
        new Date(a.insureExpireDate) - new Date(b.insureExpireDate),
    },
    {
      title: "สถานะ",
      dataIndex: "actExpireDate",
      key: "status",
      width: "10%",
      onFilter: (value, record) => {
        return record.statusexpired === "Expired"
          ? record.statusexpired
          : record.statusexpired
      },
      sorter: (a, b) => {
        return a.statusexpired.length - b.statusexpired.length
      },
      sortDirections: ["descend"],
      render: (data) => (
        <div>
          <Status date={data} />
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      width: "20%",
      render: (data) => <Action source={data} setRefetch={setRefetch} />,
    },
  ]
  return (
    <Table
      columns={columns}
      dataSource={source}
      pagination={{ pageSize: 10 }}
      loading={loading}
      scroll={{ y: 300 }}
      expandedRowRender={(record) => <ListExpanded data={record} />}
    />
  )
}

export default ListTable
