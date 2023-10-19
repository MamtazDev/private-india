import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/profile_cartoon.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import icon1 from "../../assets/fire.png";
import icon2 from "../../assets/diamond.png";
import icon3 from "../../assets/saves.png";
import icon4 from "../../assets/star.png";
const SmallSidebar2 = ({setCollapse }) => {
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
                <i class="fa-solid fa-music"></i>
              </Link>
            </p>
          </NavLink>
          <NavLink
            to="/dashboard/spotify"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <Link to="/dashboard/spotify">
                <i class="fa-solid fa-music"></i>
              </Link>
            </p>
          </NavLink>
          <NavLink
            to="/dashboard/lastfm"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <Link to="/dashboard/lastfm">
                <img src={icon1} alt="" />
              </Link>
            </p>
          </NavLink>
          <NavLink
            to="/"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <Link to="">
                <img src={icon2} alt="" />
              </Link>
            </p>
          </NavLink>
          <NavLink
            to="/dashboard/savedQues"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <Link to="/dashboard/savedQues">
                <img src={icon3} alt="" />
              </Link>
            </p>
          </NavLink>
          <NavLink
            to="/dashboard/favourites"
            className={`nav-option option1 ${isActive ? "active" : ""} ${
              isPending ? "pending" : ""
            }`}
          >
            <p>
              <Link to="/dashboard/favourites">
                <img src={icon4} alt="" />
              </Link>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar2;
