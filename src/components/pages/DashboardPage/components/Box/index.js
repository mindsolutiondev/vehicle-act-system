import React from "react"
import styled from "styled-components"

const Boxed = styled.div`
  background-color: white;
  width: 100;
  min-height: calc(100vh - 141px);
  margin: -109px 44px 44px 44px;
  border-radius: 5px;
`

const Box = ({children}) => {
  return (
    <Boxed>
      {children}
    </Boxed>
  )
}

export default Box