import React, { Fragment } from 'react';
import Routes from "./routes"
import { Helmet } from "react-helmet"
import useRoute from "../hooks/useRoute"
const { ipcRenderer } = window.require('electron');

function App() {
  const route = useRoute(window.location.pathname)
  ipcRenderer.on('setAuthentication:local', (event, status) => {
    localStorage.setItem('Authentication', true)
  })

  ipcRenderer.send('getroute',route)
  return (
    <Fragment>
      <Helmet>
        <title>Vehecle Act Systems</title>
      </Helmet>
      <Routes />
    </Fragment>
  );
}

export default App;
