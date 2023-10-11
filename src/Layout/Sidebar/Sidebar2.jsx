import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import icon1 from "../../assets/fire.png";
import icon2 from "../../assets/diamond.png";
import icon3 from "../../assets/saves.png";
import icon4 from "../../assets/star.png";
const Sidebar2 = () => {
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
          ></div>
          <div className="nav-option option1">
            <p>
              <i class="fa-solid fa-music"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/overview">Overview</Link>
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
              <i class="fa-solid fa-music"></i>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/serverlist">Spotify</Link>
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
              <img src={icon1} alt="" />
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Last.fm
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
              <img src={icon2} alt="" />
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Premium
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
              <img src={icon3} alt="" />
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/savedQues"> Saved Queues </Link>
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
              <img src={icon4} alt="" />
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/favourites">Favourites</Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
