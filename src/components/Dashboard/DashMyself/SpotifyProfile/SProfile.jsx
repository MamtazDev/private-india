import React from "react";
const SProfile = () => {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-lg-5 profile_section">
          <h4><span>Spotify</span> Profile</h4>
          <button
            className="p-2 mt-2 mb-2"
            style={{ border: "none", borderRadius: "4px" }}
          >
            Premium
          </button>
          <p>Connect your Spotify account to access additional features.</p>
          <div className="sp_buttons">
            <button className="btn btn_outline_dark  mt-3 me-3 btn_lg">
              <a href=""> Connect Spotify</a>
            </button>
            <button className="btn btn_outline_dark  me-3 mt-3 btn_lg">
              <a href="">Disconnect</a>
            </button>
          </div>
        </div>
        <div className="col-lg-7">
          <div
            class="spotify_profile_card card mb-3 w-100"
            style={{ maxWidth: "520px" }}
          >
            <div class="row card_row h-100">
              <div class="col-md-4 product_img1">
                <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img" alt="..." />
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
  );
};

export default SProfile;
