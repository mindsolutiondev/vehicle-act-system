import React from "react"
import { List, Typography, Badge, Space } from "antd"

const Lists = ({ dataSources }) => {
  return (
    <List
      bordered
      dataSource={dataSources}
      renderItem={(item, index) => (
        <List.Item>
          <Space>
            <Badge count={index + 1} />
            <Typography.Text>{item.spareParts}</Typography.Text>{" "}
          </Space>
        </List.Item>
      )}
    />
  )
}

export default Lists
