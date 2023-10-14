import React, { useEffect } from "react";
import "./Shop.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopCard = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        class="card  sellix-card m-5 "
        data-aos="fade-up"
        data-aos-duration="2000"
        style={{ width: "100%" }}
      >
        <div className="sellix-card-image">
          <img src={item.img} class="card-img-top" alt="..." />
          {/* <img src= {`../../../../assets/${item.img}`} class="card-img-top" alt="..." /> */}
        </div>

        <div class="card-body sellix-card-info">
          <h5 class="card-title">{item.title}</h5>
          {item.price ? (
            <div
              class="sellix-card-description justify-content-between"
              style={{
                fontSize: "14px",
                color: "#b4aebc",
                fontWeight: 400,
              }}
            >
              <span
                class="sellix-card-price"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#5F40E5",
                }}
              >
                $3.99
              </span>
              <span class="sellix-card-stock">
                Stock
                <span
                  style={{
                    fontSize: "1rem",
                    marginLeft: ".2rem",
                    color: "#28a745",
                  }}
                >
                  29
                </span>
              </span>
            </div>
          ) : (
            <span class="sellix-card-description">{item.info}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCard;
