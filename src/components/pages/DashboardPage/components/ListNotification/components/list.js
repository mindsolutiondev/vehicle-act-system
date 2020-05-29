import { Avatar, Empty, Tag } from "antd"
import React, { useState } from "react"

import { Table } from "reactstrap"
import styled from "styled-components"

const BoxsList = styled.div`
  width: 100%;
  height: 71vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const List = ({ data }) => {
  return (
    <>
      <Table hover>
        <tbody>
          {data.length === 0 ? (
            <BoxsList>
              <Empty description={<span>ไม่มีการแจ้งเตือน</span>} />
            </BoxsList>
          ) : (
            data.map((data, index) => (
              <tr key={index}>
                <th
                  scope="row"
                  style={{ verticalAlign: "inherit", width: "4px" }}
                >
                  <Avatar
                    style={{
                      backgroundColor: `${
                        data.statusexpired === "7 Day"
                          ? "orange"
                          : data.statusexpired === "Expired"
                          ? "#f5222d"
                          : "#F5F500"
                      }`,
                      color: "black",
                      fontWeight: "bold",
                    }}
                    size={44}
                  >
                    !
                  </Avatar>
                </th>
                <td>
                  <>
                    <div className="head">ทะเบียน {data.licensePlate}</div>
                    <div className="type">ประเภทรถ : {data.vehicleType}</div>
                    <Tag
                      style={{ color: "black" }}
                      color={`${
                        data.statusexpired === "7 Day"
                          ? "#faad14"
                          : data.statusexpired === "Expired"
                          ? "#f5222d"
                          : "#fff566"
                      }`}
                    >
                      {data.statusexpired === "Expired"
                        ? "หมดอายุแล้ว"
                        : `เหลือเวลาอีก ${
                            data.statusexpired === "7 Day" ? "7" : "15"
                          }
                      วัน กำลังหมดอายุ`}
                    </Tag>
                  </>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  )
}

export default List
