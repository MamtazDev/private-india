import React from "react";
import product from "../../../../assets/01.png";

const ManageUser = () => {
  return (
    <>
      <div className="favourites_container1">
        <div className="fav_header">
          <h3>Manage Users</h3>
          <p>
            Enter the user ID below to grant or revoke access to your Spotify
            Account
          </p>
          <input type="text" placeholder="User ID" />
          <div className="user_buttons">
            <button className="btn btn-outline-dark mt-3 me-3 btn_lg">
              Revoke Access
            </button>
            <button className="btn btn-dark me-3 mt-3 btn_lg">
              Grant Access
            </button>
          </div>
        </div>
      </div>

      <div className=" spotify_profile_container1 ">
        <div className=" profile_section">
          <h4>Users with Access</h4>
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
                <div class="card-body manage_card_body">
                  <h5 class="card-title mb-0">John Doe</h5>
                  <p>@johndoe</p>
                  <p>Access Granted</p>
                  <p>User ID: </p>
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
                <div class="card-body  manage_card_body" >
                  <h5 class="card-title mb-0">John Doe</h5>
                  <p>@johndoe</p>
                  <p>Access Granted</p>
                  <p>User ID: </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
