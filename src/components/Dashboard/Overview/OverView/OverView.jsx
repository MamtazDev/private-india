import React from "react";
import MyProducts from "../MyProducts/MyProducts";
import ServerItems from "../ServerList/ServerItems";
import Bundles from "../Bundles/Bundles";

const OverView = () => {
  return (
    <div className="overview_container">
      <ServerItems />
      <MyProducts />
      <Bundles/>
    </div>
  );
};

export default OverView;
