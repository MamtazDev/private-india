import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar3 from "../Sidebar/Sidebar3";

const Layout3 = () => {
  return (
    <div className="">
      <Header />
       <div class="w-100 container-fluid">
        <div class="row">
          <div class="col-2">
            <Sidebar3 />
          </div>
          <div class="col-10 mtop_100 outlet_bg_set">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
