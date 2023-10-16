import React from "react";
import key from "../../../../assets/key.png";
const Queues = () => {
  return (
    <div>
      <div className="saved_queues_left_heading">
        <h2>Saved Queues</h2>
        <p>View your private playlists</p>
        <button className="btn btn-outline-dark m-3 btn_lg">Settings</button>
      </div>
      <div className="card card_width_set">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
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
