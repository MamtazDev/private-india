import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar2 from "../Sidebar/Sidebar2";

const Layout2 = () => {
  return (
    <div className="">
      <Header />
    {/*   <div className="d-flex w-100 layout_container">
        <div className="w-full">
          <Sidebar2 />
        </div>
        <Outlet className="w-full outlet_height outlet_bg_set" />
      </div> */}
       <div class="w-100 ">
        <div class="row">
          <div class="col-1">
          <Sidebar2 />
          </div>
          <div class="col-11 mtop_100 outlet_bg_set">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
