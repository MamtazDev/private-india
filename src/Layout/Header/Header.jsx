import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import profile from "../../assets/g7.jpg";
const Header = () => {
  return (
    <div className="nav_bar_bg">
      <nav className="container_width navbar navbar-expand-lg">
        <div className=" container-fluid">
          <div className="profile_div">
            <img src={profile} alt="" srcset="" />
          </div>
          <a className="navbar-brand" href="/">
            Uzox Bot
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ fontWeight: 400 }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Commands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Invite
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
