import React from "react";
import MyProducts from "../MyProducts/MyProducts";
import ServerItems from "../ServerList/ServerItems";
import Bundles from "../Bundles/Bundles";
import AddsOnes from "../AddsOnes";

const OverView = () => {
  return (
    <div className="overview_container">
      <ServerItems />
      <MyProducts />
      <Bundles />
      <AddsOnes />
      <p className="small_footer">Stripe address element here for billing address</p>
    </div>
  );
};

export default OverView;
