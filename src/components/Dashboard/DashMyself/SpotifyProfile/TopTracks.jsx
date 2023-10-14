import React from "react";
import product from "../../../../assets/01.png";
const TopTracks = () => {
  return (
    <>
      {/* <div className="row spotify_profile_container1 "> */}
     <div className="container mt-5 pt-5">
     <div className="row ">
        <div className="col-lg-5 profile_section">
          <h4>Top Tracks</h4>

          <p>Your favourite tracks on Spotify.</p>
        </div>
        <div className="col-lg-7">
          <div
            class="spotify_profile_card card  mb-3 w-100"
            style={{ maxWidth: "520px" }}
          >
            <div class="row card_row">
              <div class="col-md-4 product_img1">
                <img src={product} className=" card-img" alt="..." />
              </div>
              <div class="col-md-8 spotify_profile_body1">
                <div class="card-body">
                  <h5 class="card-title mb-0">
                    Track 1 (clickable hyperlink to url)
                  </h5>
                  <p class="card-text">Artist 1 (clickable hyperlink to url)</p>
                  <button className="border-0 p-1 mt-1">#1</button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="spotify_profile_card card  mb-3 w-100"
            style={{ maxWidth: "520px" }}
          >
            <div class="row card_row">
              <div class="col-md-4 product_img1">
                <img src={product} class="card-img" alt="..." />
              </div>
              <div class="col-md-8 spotify_profile_body1">
                <div class="card-body">
                  <h5 class="card-title mb-0">
                    Track 2 (clickable hyperlink to url)
                  </h5>
                  <p class="card-text">Artist 1 (clickable hyperlink to url)</p>
                  <button className="border-0 p-1 mt-1">#2</button>
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

export default TopTracks;
