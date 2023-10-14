import React from "react";
import DefaultChannel from "../DefaultChannel";
const Setting = () => {
  return (
    <>
      <div>
        <div className="setting_header">
          <h3>Settings</h3>
        </div>
        <div className="setting_wrapper">
          <div className="setting_content">
            <button className="border_none">Premium</button>
            <div>
              <h4>24/7 - Always Active</h4>
              <p>Toggle the 24/7 online feature on or off</p>
            </div>
          </div>

          <label class="switch">
            <input type="checkbox" defaultChecked={true}   />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="setting_wrapper">
          <div className="setting_content">
            <button className="visibility_hidden"></button>
            <div>
              <h4>Announce Tracks</h4>
              <p>Toggle the lagless audio feature on or off</p>
            </div>
          </div>

          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="setting_wrapper">
          <div className="setting_content">
            <button className="border_none">Premium</button>
            <div>
              <h4>Filter Access</h4>
              <p>Allow all server members to access all filters</p>
            </div>
          </div>

          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <DefaultChannel />
    </>
  );
};

export default Setting;
