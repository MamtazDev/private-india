import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../assets/profile_cartoon.jpg";
const Sidebar3 = ({ setCollapse }) => {
  const [smallSideCollapse, setSmallSideCollapse] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);
  return (
    <div className="h-0">
      <div className="sidebar_content not_collapse_sidebar_content">
        <div className="sidebar-container">
          <div className="sidebar_profile">
            <>
              <div>
                <img src={profile} alt="" />
              </div>
              <div className="text-center">
                <small>MUSICIAN</small>
                <br />
              </div>
            </>

            <div className="logo">
              <div
                onClick={(e) => setCollapse(true)}
                className="largeDeviceIcon setCollapse"
              >
                <IoIosArrowBack />
              </div>
            </div>
          </div>

          <div className="hr_design" />
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
