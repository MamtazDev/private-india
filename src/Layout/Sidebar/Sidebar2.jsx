import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import icon1 from "../../assets/fire.png";
import icon2 from "../../assets/diamond.png";
import icon3 from "../../assets/saves.png";
import icon4 from "../../assets/star.png";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../assets/profile_cartoon.jpg";
const Sidebar2 = ({ setCollapse }) => {
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
                <i class="fa-solid fa-music"></i>
              </Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/overview">Overview</Link>
            </h6>
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
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/spotify">Spotify</Link>
            </h6>
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
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Last.fm
            </h6>
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
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Premium
            </h6>
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
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/savedQues"> Saved Queues </Link>
            </h6>
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
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/favourites">Favourites</Link>
            </h6>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
