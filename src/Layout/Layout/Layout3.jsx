import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar3 from "../Sidebar/Sidebar3";

const Layout3 = () => {
  return (
    <div className="">
      <Header />

    {/*   <div className=" w-100 layout_container">
        <div className="w-full">
          <Sidebar3 />
        </div>
        <Outlet className="w-full outlet_height outlet_bg_set" />
      </div> */}
       <div class="w-100 ">
        <div class="row">
          <div class="col-1">
            <Sidebar3 />
          </div>
          <div class="col-11 mtop_100 outlet_bg_set">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
