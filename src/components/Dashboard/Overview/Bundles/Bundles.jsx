import React, { useEffect } from "react";
import "./Bundles.css";
import product from "../../../../assets/01.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Bundles = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <p className="small_header">Bundles</p>

      <div className="bundles_card row gap-5  w-100 mt-5">
        <div
          class="col-md-6 col-12 card mb-3"
          data-aos="fade-right"data-aos-duration="2000"
          style={{ maxWidth: "520px" }}
        >
          <div class="row card_small">
            <div class="col-md-4 col-12 product_img">
              <img src={product} class="card-img" alt="..." />
            </div>
            <div class="col-md-8 col-12">
              <div class="card-body">
                <h5 class="card-title">Bundle 1</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam, quibusdam.
                </p>
                <div className="mt-2">
                  <button className="btn btn-dark me-2">Gift </button>
                  <button className="btn btn-dark">Use </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-12 card mb-3"
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{ maxWidth: "520px" }}
        >
          <div class="row no-gutters">
            <div class="col-md-4 product_img">
              <img src={product} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Bundle 1</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam, quibusdam.
                </p>
                <div className="mt-2">
                  <button className="btn btn-dark me-2">Gift </button>
                  <button className="btn btn-dark">Use </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bundles_card row gap-5 w-100 mt-4">
        <div
          class="col-md-6 col-12 card mb-3 "
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{ maxWidth: "520px" }}
        >
          <div class="row">
            <div class="col-md-4 col-12 product_img">
              <img src={product} class="card-img" alt="..." />
            </div>
            <div class="col-md-8 col-12">
              <div class="card-body">
                <h5 class="card-title">Bundle 1</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam, quibusdam.
                </p>
                <div className="mt-2">
                  <button className="btn btn-dark me-2">Gift </button>
                  <button className="btn btn-dark">Use </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-12 card mb-3"
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{ maxWidth: "520px" }}
        >
          <div class="row no-gutters">
            <div class="col-md-4 product_img">
              <img src={product} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Bundle 1</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam, quibusdam.
                </p>
                <div className="mt-2">
                  <button className="btn btn-dark me-2">Gift </button>
                  <button className="btn btn-dark">Use </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Bundles;
