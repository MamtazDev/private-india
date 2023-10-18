import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
const Sidebar3 = () => {
  const [sideCollapse, setSideCollapse] = useState(false);
  const [smallSideCollapse, setSmallSideCollapse] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);

  return (
    <div className="h-0">
      <div className="sidebar_content">
        <div
          className={`${
            smallSideCollapse ? "smallNav" : ""
          }  sidebar-container ${
            sideCollapse ? "navCollapse" : "nav_notCollapse"
          }`}
        >
          <div className="logo">
            <div
              onClick={(e) => setSideCollapse(!sideCollapse)}
              className={` ${
                sideCollapse ? "collapse_largeDeviceIcon" : "largeDeviceIcon"
              }`}
            >
              {sideCollapse ? (
                <i class="fa-solid fa-bars"></i>
              ) : (
                <i class="fa-solid fa-xmark"></i>
              )}
            </div>
            <div
              onClick={(e) => setSmallSideCollapse(!smallSideCollapse)}
              className={`${
                smallSideCollapse ? "smallDeviceIcon" : "collapse_smalll"
              }`}
            >
              {smallSideCollapse ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </div>
          </div>
          {/* profile div */}
          <NavLink
            to="/server/setting"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <i class="fa-solid fa-user"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Settings
            </h6>
          </NavLink>
          <NavLink
            to="/server/commands"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <i class="fa-solid fa-server"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/server/commands">Commands</Link>
            </h6>
          </NavLink>
          <NavLink
            to="/"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <i class="fa-brands fa-product-hunt"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Premium
            </h6>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar3;
