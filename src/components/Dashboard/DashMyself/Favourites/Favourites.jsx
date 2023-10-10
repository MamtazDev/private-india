import React from "react";
import "./Favourites.css";
const Favourites = () => {
  return (
    <div className="favourites_container">
      <div className="fav_header">
        <h3>Favourties</h3>
        <p>Manage and customize your favourite songs.</p>
        <input type="text" placeholder="Search favouries" />
        <button className="btn btn-outline-dark m-3">Search</button>
      </div>
    </div>
  );
};

export default Favourites;
