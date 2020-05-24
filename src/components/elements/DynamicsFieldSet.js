import React, { useState, useEffect, Fragment } from "react"
import { Input, Button } from "antd"
import { PlusOutlined, CloseCircleOutlined } from "@ant-design/icons"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  .dynamics {
    display: flex;
    flex-direction: row;
    width: 99%;
  }
`
const DynamicsFieldSet = (props) => {
  const [list, setList] = useState([])
  const { defaultValue } = props

  useEffect(() => {
    setList(defaultValue || [])
  }, [])

  const addFieldList = () => {
    const values = [...list]
    values.push({ [props.fields]: "" })
    setList(values)
  }

  const handleInputChange = (index, event) => {
    const values = [...list]
    const field = values[index]
    if (event.target.name === props.fields)
      field[props.fields] = event.target.value
  }

  const handleRemoveChange = (index) => {
    const values = [...list]
    values.splice(index, 1)

    setList(values)
  }

  useEffect(
    (event) => {
      props.onChange(props.fields, props.titleFields, list)
    },
    [list]
  )

  return (
    <div>
      {props.header}
      <Container>
        {list.length !== 0 &&
          list.map((lists, index) => (
            <div className="dynamics" key={`${lists}~${index}`}>
              <Input
                name={props.fields}
                defaultValue={lists.spareParts}
                onChange={(e) => handleInputChange(index, e)}
              />
              <Button onClick={() => handleRemoveChange(index)} danger>
                <CloseCircleOutlined />
              </Button>
            </div>
          ))}
      </Container>
      <Button type="dashed" block onClick={addFieldList}>
        <PlusOutlined />
      </Button>
    </div>
  )
}

DynamicsFieldSet.defaultProps = {
  fields: "spareparts",
}

export default DynamicsFieldSet
