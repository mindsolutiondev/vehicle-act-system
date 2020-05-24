import React from "react"
import { LoadingOutlined } from "@ant-design/icons"
import styled from "styled-components"

const Contain = styled.div`
  width: 100%;
  height: 47vh;
  display: flex;
  justify-content: center;
  padding: 126px;

  .icon {
    padding: 4px 14px 4px 3px;
  }
  .text {
    display: flex;
    align-items: center;
  }
`
const Loading = ({ text }) => {
  return (
    <Contain>
      <div className="icon">
        <LoadingOutlined style={{ fontSize: "40px" }} />
      </div>
      <div className="text">{text}</div>
    </Contain>
  )
}

Loading.defaultProps = {
  text: "Loading ...",
}

export default Loading
