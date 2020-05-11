import React from "react";
import { Route } from "react-router-dom";

import Callback from '../components/Callback';

import Auth from '../auth';
import Home from "./Home";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Layout = () => {
  return (
    <div>
      <Route
        path="/"
        exact
        render={() => <Home auth={auth} />}
      />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }} />
    </div>
  );
}

export default Layout;