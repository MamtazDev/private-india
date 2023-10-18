import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/g7.jpg";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
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
          <div
            className={` ${
              sideCollapse ? "sidebar_collapse_profile" : "sidebar_profile"
            }`}
          >
            <div>
              <img src={profile} alt="" />
            </div>
            <p>Username</p>
            <hr />
          </div>
          <NavLink
            to="/dashboard/overview"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            {/* className="nav-option option1 active_class"  */}
            <p>
              <Link to="/dashboard/overview">
                <i class="fa-solid fa-user"></i>
              </Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/overview"> Personal Config</Link>
            </h6>
          </NavLink>
          <NavLink
            to="/dash/server_list"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <Link to="/dash/server_list">
                <i class="fa-solid fa-server"></i>
              </Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dash/server_list">Servers List</Link>
            </h6>
          </NavLink>
          <NavLink
            to="/dash/myProducts"
            className={`nav-option option1 ${isActive ? "active_class" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <i class="fa-brands fa-product-hunt"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              My Products
            </h6>
          </NavLink>
          <NavLink
            to="/dash/billing"
            className={`nav-option option1 ${isActive ? "active_class" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <i class="fa-solid fa-money-bill"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Billing
            </h6>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
