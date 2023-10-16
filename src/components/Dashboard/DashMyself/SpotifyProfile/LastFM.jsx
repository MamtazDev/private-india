import React from "react";
import product from "../../../../assets/01.png";

const LastFM = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-5 profile_section">
              <h4 className="mb-3">
                <span>LastFM</span> Profile
              </h4>

              <p>Connect your Spotify account to access additional features.</p>
              <div className="sp_buttons mb-5">
                <button className="btn btn_outline_dark  mt-3 me-3 btn_lg">
                  <a href=""> Connect Last.fm</a>
                </button>
              </div>
            </div>

            <div
              class="col-lg-7 spotify_profile_card card mb-3 w-100"
              style={{ maxWidth: "520px", marginTop: "7%" }}
            >
              <div className="container toggle_container">
                <div className="scrobble_container">
                  <p className="scrobble_text">Scrobble</p>
                  <div id="app-cover" className="">
                    <div class="row">
                      <div class="toggle-button-cover">
                        <div class="button-cover">
                          <div class="button r" id="button-1">
                            <input type="checkbox" class="checkbox" />
                            <div class="knobs"></div>
                            <div class="layer"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row card_row h-100">
                <div class="col-md-4 product_img1">
                  <img src={product} class="card-img" alt="..." />
                </div>
                <div class="col-md-8 spotify_profile_body">
                  <div class="card-body">
                    <h5 class="card-title mb-0">Connected as</h5>
                    <p class="card-text">John Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastFM;
