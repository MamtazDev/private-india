import React from "react";
import product from "../../../../assets/01.png";
const TopArticles = () => {
  return (
    <>
      <div className=" spotify_profile_container1 ">
        <div className=" profile_section">
          <h4>Top Artists</h4>

          <p>Explore your favorite artists on Spotify.</p>
        </div>
        <div className="">
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
                  Artist 1 (clickable hyperlink to url)
                  </h5>
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
                  Artist 2 (clickable hyperlink to url)
                  </h5>
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

export default TopArticles;
