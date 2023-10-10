import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import '../../App.css'
import Sidebar from "../Sidebar/Sidebar";
const Layout = () => {
  return (
    <div className="">
      <Header />
      <Sidebar/>
      <Outlet />
    </div>
  );
};

export default Layout;
