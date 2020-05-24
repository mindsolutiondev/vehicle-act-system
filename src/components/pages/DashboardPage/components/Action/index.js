import React, { Fragment } from "react"
import Loadable from "react-loadable"
import Show from "./Show"
import Delete from "./Delete"
import Edit from "./Edit"

const Action = ({ source }) => {
  return (
    <Fragment>
      <Show id={source._id} />
      <Edit id={source._id} />
      <Delete id={source._id} />
    </Fragment>
  )
}

export default Action
