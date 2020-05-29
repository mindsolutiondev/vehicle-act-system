import React from "react"
import styled from "styled-components"

const Box = styled.div`
  cursor: pointer;
`
const PopoverMenu = ({ items }) => {
  const itemList = items.map((item, idx) => {
    const key = `${item.title}-${idx}`
    return (
      <Box
        key={key}
        onClick={(evt) => {
          evt.stopPropagation()
          typeof item.onClick === "function" && item.onClick()
        }}
      >
        {item.title}
      </Box>
    )
  })
  return <>{itemList}</>
}

export default PopoverMenu
