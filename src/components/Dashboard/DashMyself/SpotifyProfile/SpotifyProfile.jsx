import React from "react";
import "./SpotifyProfile.css";
import TopTracks from "./TopTracks";
import TopArticles from "./TopArticles";
import ManageUser from "./ManageUser";
import SProfile from "./SProfile";
const SpotifyProfile = () => {
  return (
    <>
      <div className="spotify_profile">
        <SProfile />
        <TopTracks />
        <TopArticles />
        <ManageUser />
        <footer className="mt-5 pt-5">© 2021 Uzox Music Bot. All rights reserved.</footer>
      </div>
    </>
  );
};

export default SpotifyProfile;
