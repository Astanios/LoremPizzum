import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./containers/Layout";
import Home from "./containers/Home";
import store from "./store/store";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "react-router-dom";
import history from "./utils/history";

import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} component={Home}>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
