import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/profile_cartoon.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const SmallSidebar1 = ({collapse,setCollapse}) => {
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
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar1;
