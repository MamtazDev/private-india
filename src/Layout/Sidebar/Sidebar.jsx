import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/profile_cartoon.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Sidebar = ({ setCollapse }) => {
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
            to="/dashboard/overview"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
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
