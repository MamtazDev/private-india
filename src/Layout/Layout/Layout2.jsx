import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar2 from "../Sidebar/Sidebar2";

const Layout2 = () => {
  return (
    <div className="">
      <Header />
      <div className="d-flex w-100 layout_container">
        <div className="w-full">
          <Sidebar2 />
        </div>
        <Outlet className="w-full outlet_height" />
      </div>
    </div>
  );
};

export default Layout2;
