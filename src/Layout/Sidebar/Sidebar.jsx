import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/g7.jpg";

const Sidebar = () => {
  const [sideCollapse, setSideCollapse] = useState(false);
  const [smallSideCollapse, setSmallSideCollapse] = useState(false);

  return (
    <>
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
              className={`${smallSideCollapse ? "smallDeviceIcon" :"collapse_smalll"}`}
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
          <div className="nav-option option1">
            <p >
              <i class="fa-solid fa-user"></i>
            </p>
            <h6 className={smallSideCollapse? "d_block":"d_none"}>Personal Config</h6>
          </div>
          <div className="nav-option option1">
            <p>
              <i class="fa-solid fa-server"></i>
            </p>
            <h6 className={smallSideCollapse? "d_block":"d_none"}>Servers List</h6>
          </div>
          <div className="nav-option option1">
            <p>
              <i class="fa-brands fa-product-hunt"></i>
            </p>
            <h6 className={smallSideCollapse? "d_block":"d_none"}>My Products</h6>
          </div>
          <div className="nav-option option1">
            <p>
              <i class="fa-solid fa-money-bill"></i>
            </p>
            <h6 className={smallSideCollapse? "d_block":"d_none"}>Billing</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
