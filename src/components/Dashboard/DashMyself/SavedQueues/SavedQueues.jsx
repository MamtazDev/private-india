import React from "react";
import "./SavedQueues.css";
import squareup from '../../../../assets/squareup.png'
import squaredown from '../../../../assets/sqd.png'
const SavedQueues = () => {
  return (
    <>
      <div className="favourites_container mb-5">
        <div className="fav_header">
          <h3>Saved Queues</h3>
          <p>Manage and customize your Saved Queues.</p>
          <input type="text" placeholder="Search playlists" />
          <button className="btn btn-outline-dark m-3 btn_lg">Search</button>
        </div>
        <div className="ques_container">
          <div>
            <p className="ques_header">Your Saved Queues</p>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="queues_parent">
                <div className="track_container">
                  <div className="saved_ques">
                    <p>Saved Queue {item} </p>
                    Tracks: 22
                  </div>

                  <button className="d-flex gap-3">
             
                    <i class="fa-solid fa-wrench"></i>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="ques_header">Tracks In Saved Queue</p>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="queues_parent">
                <div className="track_container">
                  <div className="saved_ques">
                    <p>Track {item} </p>
                    Link Duration
                  </div>

                  <button className="d-flex gap-3">
                  <img src={squareup} alt="" />
                  <img src={squaredown} alt="" />
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-dark m-3 btn_lg">Save Changes</button>
      </div>
    </>
  );
};

export default SavedQueues;
