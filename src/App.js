import React, { Component } from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import DefaultLayout from "./container/default-layout-component/default-layout.component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          name="layout"
          render={(props) => <DefaultLayout {...props} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
