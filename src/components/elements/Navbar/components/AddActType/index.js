import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import { Button, Divider } from "antd"
import ActService from "../../../../../model/act"
import styled from "styled-components"
import Table from "../Table"
const FormImplement = styled(Form)`
  display: flex;
  flex-direction: column;

  .heading {
    line-height: 39.9999px;
  }
  .field {
    margin-bottom: 9px;
  }
`
const FieldImplement = styled(Field)`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`

const ListHeaderMenu = (props) => {
  let [actType, setActType] = useState([])
  return (
    <Formik
      initialValues={{
        nameActType: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        let data = await ActService.postActType(values)
        setActType(data.data.createActResult)
        resetForm()
      }}
    >
      <FormImplement>
        <div className="heading">เพิ่มประเภทรถยนต์</div>
        <div className="field">
          <FieldImplement type="text" name="nameActType" />
        </div>
        <Button type="primary" htmlType="submit">
          บันทึก
        </Button>
        <Divider />
        <Table data={actType} />
      </FormImplement>
    </Formik>
  )
}

export default ListHeaderMenu
