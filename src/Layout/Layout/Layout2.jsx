import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar2 from "../Sidebar/Sidebar2";

const Layout2 = () => {
  return (
    <div className="">
      <Header />
      <div class="w-100 container-fluid">
        <div class="row">
          <div class="col-2" style={{backgroundColor:"black"}}>
            <Sidebar2 />
          </div>
          <div class="col-10 mtop_100 outlet_bg_set">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
