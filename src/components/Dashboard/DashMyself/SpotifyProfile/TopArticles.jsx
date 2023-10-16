import React from "react";
const TopArticles = () => {
  return (
    <>
     <div className="container mt-5 pt-5">
     <div className=" row ">
        <div className="col-lg-5 profile_section">
          <h4>Top Artists</h4>

          <p>Explore your favorite artists on Spotify.</p>
        </div>
        <div className="col-lg-7">
          <div
            class="spotify_profile_card card  mb-3 w-100"
            style={{ maxWidth: "520px" }}
          >
            <div class="row card_row">
              <div class="col-md-4 product_img1">
                <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className=" card-img" alt="..." />
              </div>
              <div class="col-md-8 spotify_profile_body1">
                <div class="card-body">
                  <h5 class="card-title mb-0">
                  Artist 1 (clickable hyperlink to url)
                  </h5>
                  <button className="border-0 p-1 mt-1 number_text">#1</button>
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
                <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img" alt="..." />
              </div>
              <div class="col-md-8 spotify_profile_body1">
                <div class="card-body">
                  <h5 class="card-title mb-0">
                  Artist 2 (clickable hyperlink to url)
                  </h5>
                  <button className="border-0 p-1 mt-1 number_text">#2</button>
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

export default TopArticles;
