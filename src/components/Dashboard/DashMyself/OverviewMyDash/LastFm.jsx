import React from "react";
import key from "../../../../assets/key.png";
import { Link } from "react-router-dom";

const LastFm = () => {
  return (
    <>
      <div className="saved_queues_left_heading">
        <h2>Last.fm</h2>
        <p>
          Login to your Last.fm account to access your profile and scrobble
          music.
        </p>
        <button className="btn btn_outline_dark me-3 mt-3 btn_lg">
          <Link to="/dashboard/lastfm">Login</Link>
        </button>
        <button className="btn btn_outline_dark me-3 mt-3 btn_lg">
          <Link to="/dashboard/lastfm">Logout</Link>
        </button>
      </div>
      {/* card */}
      <div className="card card_width_set">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <div className="card-body p-0 overview_card">
          <p className="card-text">Last.fm</p>
          <h5>Connected</h5>
          <img src={key} alt="" />
        </div>
      </div>
    </>
  );
};

export default LastFm;
