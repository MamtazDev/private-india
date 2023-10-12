import React from "react";
import "./MyProduct.css";
import AddsOnes from "../AddsOnes";
import Bundles from "../Bundles/Bundles";
const MyProducts = () => {
  return (
    <>
      <div className="server_title">
        <p>My Products</p>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn_secondary me-2">
          Server
        </button>
        <button type="button" className="btn btn_secondary me-2">
          Personal
        </button>
      </div>
      <Bundles />
      <AddsOnes />
    </>
  );
};

export default MyProducts;
