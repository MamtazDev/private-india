import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/g7.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sideCollapse, setSideCollapse] = useState(false);
  const [smallSideCollapse, setSmallSideCollapse] = useState(false);

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
          <Link to="/dashboard/overview" className="nav-option option1">
            <p>
              <Link to="/dashboard/overview">
                {" "}
                <i class="fa-solid fa-user"></i>
              </Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/overview"> Personal Config</Link>
            </h6>
          </Link>
          <Link to="/server" className="nav-option option1">
            <p>
              <Link to="/server">
                {" "}
                <i class="fa-solid fa-server"></i>
              </Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/server_list">Servers List</Link>
            </h6>
          </Link>
          <Link to="/myProducts" className="nav-option option1">
            <p>
              <i class="fa-brands fa-product-hunt"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              My Products
            </h6>
          </Link>
          <Link to="/billing" className="nav-option option1">
            <p>
              <i class="fa-solid fa-money-bill"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Billing
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
