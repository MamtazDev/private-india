import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <div class="w-100 container-fluid">
        <div className="row w-100">
          <div className="col-2 sidebar_bg_color">
            <Sidebar />
          </div>
          <div className="col-10 mtop_100 outlet_bg_set overflow_hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
