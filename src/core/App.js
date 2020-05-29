import React, { Fragment } from "react"
import Routes from "./routes"
import { Helmet } from "react-helmet"

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Vehecle Act Systems</title>
      </Helmet>
      <Routes />
    </Fragment>
  )
}

export default App
