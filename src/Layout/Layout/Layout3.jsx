import React from "react";
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import "../../App.css";
import Sidebar3 from "../Sidebar/Sidebar3";

const Layout3 = () => {
  return (
    <div className="">
      <Header />

      <div className="d-flex w-100 layout_container">
        <div className="w-full">
          <Sidebar3 />
        </div>
        <Outlet className="w-full outlet_height" />
      </div>
    </div>
  );
};

export default Layout3;
