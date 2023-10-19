import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/profile_cartoon.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const SmallSidebar3 = ({ setCollapse }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);
  return (
    <div className="h-0">
      <div className="sidebar_content collapse_sidebar_content">
        <div>
          <div>
            <div className="collapse_logo logo">
              <div
                onClick={(e) => setCollapse(false)}
                className="largeDeviceIcon"
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <>
            <div className="sidebar_profile mt-2 mb-2">
              <img src={profile} alt="" />
            </div>
            <div className="text-center">
              <small>MUSICIAN</small>
              <br />
            </div>
          </>
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
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar3;
