import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.css"
import App from "./core/App"
import "./style/index.css"
import * as serviceWorker from "./serviceWorker"
import { setGlobal } from "reactn"

setGlobal({
  actGlobal: [],
  actNotificationAlert: [],
  actType: [],
})

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
