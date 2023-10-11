import React from "react";
import cardImg from "../../../../assets/g7.jpg";
import key from "../../../../assets/key.png";
const Queues = () => {
  return (
    <div>
      <div className="saved_queues_left_heading">
        <h2>Saved Queues</h2>
        <p>View your private playlists</p>
        <button className="btn btn-outline-dark m-3 btn_lg">Settings</button>
      </div>
      {/* card */}
      <div className="card card_width_set">
        <img className="card-img-top" src={cardImg} alt="Card image cap" />
        <div className="card-body p-0 overview_card">
          <p className="card-text">saved queues quick stats</p>
          <h5>Connected</h5>
          <img src={key} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Queues;
