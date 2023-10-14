import React from "react";

const DefaultChannel = () => {
  return (
    <>
      <div className="default_container">
        <div className="default_wrapper">
          <p>Default Text Channel</p>
          <input type="text" placeholder="Enter channel name" />
        </div>
        <div className="default_wrapper">
          <p>Default Volume</p>
          <input type="text" placeholder="" />
          <label htmlFor="">Range: 0-100</label>
        </div>
        <div className="default_wrapper">
          <p>Default Track</p>
          <input type="text" placeholder="" />
        </div>
        <div className="default_wrapper">
          <p>Default Voice Channel</p>
          <input type="text" placeholder="Enter channel name" />
        </div>
        <div className="default_wrapper">
          <p>DJ Role</p>
          <input type="text" placeholder="Enter role name" />
        </div>
        <button className="btn btn_outline_dark m-3 btn_lg">
          <a href="">Save</a>
        </button>
      </div>
    </>
  );
};

export default DefaultChannel;
