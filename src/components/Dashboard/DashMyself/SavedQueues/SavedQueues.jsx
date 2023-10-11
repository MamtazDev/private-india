import React from "react";
import "./SavedQueues.css";
const SavedQueues = () => {
  return (
    <>
      <div className="favourites_container">
        <div className="fav_header">
          <h3>Saved Queues</h3>
          <p>Manage and customize your Saved Queues.</p>
          <input type="text" placeholder="Search playlists" />
          <button className="btn btn-outline-dark m-3 btn_lg">Search</button>
        </div>
        <div className="ques_container">
          <div>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="  queues_parent">
                <div className="track_container">
                  <div className="saved_ques">
                    <p>Saved Queue {item} </p>
                    Tracks: 22
                  </div>

                  <button className="d-flex gap-2">
                    <i class="fa-solid fa-wrench"></i>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="queues_parent">
                <div className="track_container">
                  <div className="saved_ques">
                    <p>Track {item} </p>
                    Link Duration
                  </div>

                  <button className="d-flex gap-2">
                    <i class="fa-solid fa-wrench"></i>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* saved queues */}
    </>
  );
};

export default SavedQueues;
