import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar2 from "../Sidebar/Sidebar2";
import SmallSidebar2 from "../Sidebar/SmallSidebar2";

const Layout2 = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="">
      <Header />
      <div class="w-100 container-fluid">
        <div class="row">
          <div class="col-2" style={{ backgroundColor: "black" }}>
            {collapse ? (
              <SmallSidebar2 setCollapse={setCollapse} />
            ) : (
              <Sidebar2 setCollapse={setCollapse} />
            )}
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
