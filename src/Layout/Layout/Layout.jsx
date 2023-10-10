import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import '../../App.css'
const Layout = () => {
  return (
    <div className="container_width">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
