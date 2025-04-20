import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>;
  }
}
