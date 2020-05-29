/* eslint-disable no-alert, no-console */
import React, { Fragment, useEffect } from "react"
import Loadable from 'react-loadable'


const Navbar = Loadable({
  loader: () => import(/* webpackChunkName: "template.page"*/'../../components/elements/Navbar'),
  loading: () => null, delay: 1000
});


const Template = ({ children }) => {

  return (
    <div style={{ minHeight: '100vh', background: '#f6f7f5', overflow: 'auto' }}>
      <Navbar />
      {children}
    </div>
  )
}

export default Template