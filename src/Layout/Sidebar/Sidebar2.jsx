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
            <Link to="/dashboard/overview"> <i class="fa-solid fa-music"></i></Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/overview">Overview</Link>
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
            <Link to="/dashboard/spotify"><i class="fa-solid fa-music"></i></Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/spotify">Spotify</Link>
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
            <Link to="/"> <img src={icon1} alt="" /></Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Last.fm
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
            <Link to="/"><img src={icon2} alt="" /></Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              Premium
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
            <Link to="/dashboard/savedQues">  <img src={icon3} alt="" /></Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/savedQues"> Saved Queues </Link>
            </h6>
          </div>
          <div className="nav-option option1">
            <p>
            <Link to="/dashboard/favourites"> <img src={icon4} alt="" /></Link>
            </p>
            <h6 className={smallSideCollapse ? "d_block" : "d_none"}>
              <Link to="/dashboard/favourites">Favourites</Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
