import React from "react";
import product from "../../../../assets/01.png";
const TopTracks = () => {
  return (
    <>
      <div className="spotify_profile_container1">
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
              <div class="col-md-4 h-100">
                <img src={product} className="h-100 card-img" alt="..." />
              </div>
              <div class="col-md-8 spotify_profile_body">
                <div class="card-body">
                  <h5 class="card-title">
                    Track 1 (clickable hyperlink to url)
                  </h5>
                  <p class="card-text">Artist 1 (clickable hyperlink to url)</p>
                  <button className="border-0 p-1 mt-1">#1</button>
                </div>
              </div>
            </div>
          </div>
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
                  <h5 class="card-title">
                    Track 1 (clickable hyperlink to url)
                  </h5>
                  <p class="card-text">Artist 1 (clickable hyperlink to url)</p>
                  <button className="border-0 p-1 mt-1">#2</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTracks;
