import React, { useEffect } from "react";
import "./OverviewMyDash.css";
import cardImg from "../../../../assets/g7.jpg";
import key from "../../../../assets/key.png";
import Spotify from "./Spotify";
import AOS from "aos";
import "aos/dist/aos.css";

const OverviewMyDash = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overview_container" style={{ backgroundColor: "black" }}>
      <div className="outlet_container">
        <div
          className="saved_queue_container"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="saved_queues_left_heading">
            <h2>Saved Queues</h2>
            <p>View your private playlists</p>
            <button className="btn btn_outline_dark me-3 mt-3 btn_lg">
              <a href="/dashboard/savedQues"> Settings</a>
            </button>
          </div>
          <div className="card card_width_set">
            <img className="card-img-top" src={cardImg} alt="Card image cap" />
            <div className="card-body p-0 overview_card">
              <p className="card-text">saved queues quick stats</p>
              <h5>Connected</h5>
              <img src={key} alt="" />
            </div>
          </div>
        </div>
        <div
          className="saved_queue_container"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="saved_queues_left_heading">
            <h2>Favourites</h2>
            <p>View your private playlists</p>
            <button className="btn btn_outline_dark me-3 mt-3 btn_lg">
              <a href="/dashboard/favourites">Settings</a>
            </button>
          </div>
          <div className="card card_width_set">
            <img className="card-img-top" src={cardImg} alt="Card image cap" />
            <div className="card-body p-0 overview_card">
              <p className="card-text">favourites quick stats</p>
              <h5>Connected</h5>
              <img src={key} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Spotify />
      </div>
    </div>
  );
};

export default OverviewMyDash;
