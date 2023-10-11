import React from "react";
import "./OverviewMyDash.css";
import cardImg from "../../../../assets/g7.jpg";
import key from "../../../../assets/key.png";
import Favourites from "./Favourites";
import Spotify from "./Spotify";
const OverviewMyDash = () => {
  return (
    <div className="overview_container">
      <div className="outlet_container d-flex">
        <div className="saved_queue_container">
          <div className="saved_queues_left_heading">
            <h2>Saved Queues</h2>
            <p>View your private playlists</p>
            <button className="btn btn-outline-dark me-3 mt-3 btn_lg">
              Settings
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
        <div className="saved_queue_container">
          <Favourites />
        </div>
      </div>
      <div>
        <Spotify />
      </div>
    </div>
  );
};

export default OverviewMyDash;
