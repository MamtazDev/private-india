import React from "react";

const Category = () => {
  return (
    <>
      <div className="text-center mt-5">
        <button className="btn btn-outline-light category_btn me-3">Category 1</button>
        <button className="btn btn-outline-light category_btn me-3">Category 2</button>
        <button className="btn btn-outline-light category_btn me-3">Category 3</button>
        <button className="btn btn-outline-light category_btn me-3">Category 4</button>
      </div>

      <div className="setting_wrapper1">
        <div className="setting_content">
          <button className="border_none">Premium?</button>
          <div>
            <h4>Command Name</h4>
            <p>Command Description</p>
          </div>
        </div>

        <label class="switch">
          <input type="checkbox" defaultChecked={true} />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="setting_wrapper1">
        <div className="setting_content">
          <button className="border_none">Premium?</button>
          <div>
            <h4>Command Name</h4>
            <p>Command Description</p>
          </div>
        </div>

        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="setting_wrapper1">
        <div className="setting_content">
          <button className="border_none">Premium?</button>
          <div>
            <h4>Command Name</h4>
            <p>Command Description</p>
          </div>
        </div>

        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>

      {/* danger zone */}
      <div className="text-center mt-4">
        <p className="danger_zoner">Danger Zone</p>
        <button className="reset_button">Reset Configurations</button>
      </div>
    </>
  );
};

export default Category;
