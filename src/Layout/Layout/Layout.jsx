import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar from "../Sidebar/Sidebar";
const Layout = () => {
  return (
    <div className="">
      <Header />
      <div className="d-flex w-100">
        <div className="w-full">
          <Sidebar />
        </div>
        <Outlet className="w-full" />
      </div>
    </div>
  );
};

export default Layout;
