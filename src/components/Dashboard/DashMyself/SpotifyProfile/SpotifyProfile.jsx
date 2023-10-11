import React from "react";
import "./SpotifyProfile.css";
import product from "../../../../assets/01.png";
import TopTracks from "./TopTracks";
const SpotifyProfile = () => {
  return (
    <>
      <div className="spotify_profile">
        <div className="spotify_profile_container">
          <div className="profile_section">
            <h4>Spotify Profile</h4>
            <button className="p-1 mt-2 mb-2" style={{ border: "none" }}>
              Premium
            </button>
            <p>Connect your Spotify account to access additional features.</p>
            <button className="btn btn-dark mt-3 me-3 btn_lg">
              Connect Spotify
            </button>
            <button className="btn btn-outline-dark me-3 mt-3 btn_lg">
              Disconnect
            </button>
          </div>

          <div>
            <div
              class="spotify_profile_card card mb-3 w-100"
              style={{ maxWidth: "520px" }}
            >
              <div class="row">
                <div class="col-md-4 product_img1">
                  <img src={product} class="card-img" alt="..." />
                </div>
                <div class="col-md-8 spotify_profile_body">
                  <div class="card-body">
                    <h5 class="card-title">Connected as</h5>
                    <p class="card-text">John Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopTracks />
      </div>
    </>
  );
};

export default SpotifyProfile;