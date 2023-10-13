import React from "react";
import ShopCard from "./ShopCard";
import item1 from "../../../../assets/shopitem1.avif";
import item2 from "../../../../assets/shopitem2.avif";
import item3 from "../../../../assets/shopitem3.avif";
import item4 from "../../../../assets/shopitem4.avif";
import item5 from "../../../../assets/shopitem5.avif";
const data = [
  {
    img: { item1 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: { item1 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "3.99",
    info: "Product sold out",
    stock: "29",
  },
  {
    img: { item2 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "25.00",
    info: "Product sold out",
    stock: "17",
  },
  {
    img: { item3 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "1.00",
    info: "Product sold out",
    stock: "~",
  },
  {
    img: { item4 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "39.99",
    info: "Product sold out",
    stock: "6",
  },
  {
    img: { item4 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "14.95",
    info: "Product sold out",
    stock: "2",
  },
  {
    img: { item5 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: { item5 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: { item1 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "19.99",
    info: "Product sold out",
    stock: "~",
  },
  {
    img: { item1 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "13.99",
    info: "Product sold out",
    stock: "~",
  },
  {
    img: { item1 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: { item1 },
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "19.99",
    info: "Product sold out",
    stock: "~",
  },
];

const Shop = () => {
  return (
    <div className="outlet_bg_set">
      <div className="container">
        <div className="row mtop_100">
          {data.map((item) => (
            <div className="col-md-3">
              <ShopCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
