import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Sidebar3 from "../Sidebar/Sidebar3";
import SmallSidebar1 from "../Sidebar/SmallSidebar1";
import SmallSidebar3 from "../Sidebar/SmallSidebar3";

const Layout3 = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="">
      <Header />
      <div class="w-100 container-fluid">
        <div class="row">
          <div class="col-2 sidebar_bg_color">
            {collapse ? (
              <SmallSidebar3 setCollapse={setCollapse} />
            ) : (
              <Sidebar3 setCollapse={setCollapse} />
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

export default Layout3;
