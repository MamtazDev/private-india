import React, { useEffect } from "react";
import "./SavedQueues.css";
import squareup from "../../../../assets/squareup.png";
import squaredown from "../../../../assets/sqd.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SavedQueues = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="favourites_container mb-5 ">
        <div className="fav_header">
          <h3>
            Saved <span>Queues</span>
          </h3>
          <p>Manage and customize your Saved Queues.</p>
          <input type="text" placeholder="Search playlists" />
          <button className="btn btn_outline_dark m-3 btn_lg">
            <a href="">Search</a>
          </button>
        </div>
        <div className="ques_container">
          <div>
            <p className="ques_header">
              Your Saved <span>Queues</span>
            </p>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                className="queues_parent"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
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
            <p className="ques_header">
              Tracks In <span>Saved Queue</span>
            </p>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                className="queues_parent"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
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
        <button className="btn btn_outline_dark m-3 btn_lg">
          <a href="">Save Changes</a>
        </button>
      </div>
    </>
  );
};

export default SavedQueues;
