import React, { useEffect } from "react";
import "./Favourites.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Favourites = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="favourites_container mb-5 pb-5">
      <div className="fav_header">
        <h3>Favourties</h3>
        <p>Manage and customize your favourite songs.</p>
        <input type="text" placeholder="Search favouries" />
        <button className="btn btn_outline_dark m-3 btn_lg">
          <a href="">Search</a>
        </button>
      </div>
      <div className="fav_header">
        <p>Add names to your favourites</p>
        <input type="text" className="name_input" placeholder="Name" />
        <button className="btn btn_outline_dark m-3 btn_lg">
          <a href="">Add</a>
        </button>
      </div>
      {[1, 2, 3].map((item) => (
        <div className="d-flex gap-4 tracks">
          <div
            className="track_parent"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="track_container w-100">
              <p>Track {item}</p>
              <button className="">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div
            className="track_parent"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="track_container w-100">
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
