import React, { Fragment } from "react"
import { Switch, Route, HashRouter, Redirect } from "react-router-dom"
import Loadable from "react-loadable"

const Login = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Login.page"*/ "../components/pages/LoginPage"),
  loading: () => null,
  delay: 1000,
})

const Dashboard = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "Dashboard.page" */ "../components/pages/DashboardPage"
    ),
  loading: () => null,
  delay: 1000,
})

const PrivateRoute = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Dashboard.page" */ "./PrivateRoute"),
  loading: () => null,
  delay: 1000,
})

const Routes = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={Login} />
      <Fragment>
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Fragment>

      <Route render={() => <Redirect to="/"/>}/>
    </Switch>
  </HashRouter>
)

export default Routes
