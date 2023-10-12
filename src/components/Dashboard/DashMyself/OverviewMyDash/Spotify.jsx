import React from "react";
import "./OverviewMyDash.css";
import cardImg from "../../../../assets/g7.jpg";
import key from "../../../../assets/key.png";
import LastFm from "./LastFm";
const Spotify = () => {
  return (
    <>
      <div className="outlet_container1 ">
        <div className="saved_queue_container">
          <div className="saved_queues_left_heading">
            <h2>Spotify</h2>
            <p>
              Login to your Last.fm account to access your profile and scrobble
              music.
            </p>
            <button className="btn btn-outline-dark me-3 mt-3 btn_lg">
              Login
            </button>
            <button className="btn btn-outline-dark me-3 mt-3 btn_lg">
              Logout
            </button>
          </div>
          {/* card */}
          <div className="card card_width_set">
            <img className="card-img-top" src={cardImg} alt="Card image cap" />
            <div className="card-body p-0 overview_card">
              <p className="card-text">Last.fm</p>
              <h5>Connected</h5>
              <img src={key} alt="" />
            </div>
          </div>
        </div>
        <div className="saved_queue_container">
          <LastFm />
        </div>
      </div>
    </>
  );
};

export default Spotify;
