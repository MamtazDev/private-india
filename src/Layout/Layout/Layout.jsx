import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="">
      <Header />

   {/*    <div className="row  w-100 h-0">
        <div className="col-lg-2 sidebar_wrapper"></div>
        <div className="col-lg-10 w-100"></div>
      </div> */}
      <div class="w-100">
        <div class="row">
          <div class="col-1">
            <Sidebar />
          </div>
          <div class="col-11 mtop_100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
