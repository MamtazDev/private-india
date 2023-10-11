import React from "react";
import "./Favourites.css";
const Favourites = () => {
  return (
    <div className="favourites_container">
      <div className="fav_header">
        <h3>Favourties</h3>
        <p>Manage and customize your favourite songs.</p>
        <input type="text" placeholder="Search favouries" />
        <button className="btn btn-outline-dark m-3 btn_lg">Search</button>
      </div>
      <div className="fav_header">
        <p>Add names to your favourites</p>
        <input type="text" className="name_input" placeholder="Name" />
        <button className="btn btn-outline-dark m-3 btn_lg">Add</button>
      </div>
      {/* track div */}
      {[ 1, 2, 3].map((item) => (
       <div className="d-flex justify-content-between gap-4 tracks">
         <div className="track_parent">
          <div className="track_container">
            <p>Track {item}</p>
            <button className="">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="track_parent">
          <div className="track_container">
            <p>Track {item}</p>
            <button className="">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
       </div>
      ))}
    </div>
  );
};

export default Favourites;
