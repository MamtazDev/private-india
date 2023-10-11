import React from "react";
import Setting from "./Setting/Setting";
import "./ServicePage.css";
import DefaultChannel from "./DefaultChannel";
import Category from "./Category";
const ServerPage = () => {
  return (
    <div className="server_container">
      <Setting />
      <DefaultChannel />
      <Category />
    </div>
  );
};

export default ServerPage;
