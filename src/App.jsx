import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import NearestEvents from "./pages/dashboard/nearest-events";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/nearest-events" element={<NearestEvents />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
