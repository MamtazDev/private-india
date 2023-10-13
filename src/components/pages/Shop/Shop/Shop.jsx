import React from "react";
import ShopCard from "./ShopCard";

const data = [
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/483c9d74-6f4f-46bb-1dc1-902ca558f400/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/2bea13a5-8750-45c2-5373-13393363cb00/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "3.99",
    info: "Product sold out",
    stock: "29",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/f388b543-6406-41b5-e857-301f43843e00/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "25.00",
    info: "Product sold out",
    stock: "17",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/f388b543-6406-41b5-e857-301f43843e00/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "1.00",
    info: "Product sold out",
    stock: "~",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/2bea13a5-8750-45c2-5373-13393363cb00/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "39.99",
    info: "Product sold out",
    stock: "6",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/f388b543-6406-41b5-e857-301f43843e00/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "14.95",
    info: "Product sold out",
    stock: "2",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/483c9d74-6f4f-46bb-1dc1-902ca558f400/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/483c9d74-6f4f-46bb-1dc1-902ca558f400/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/f388b543-6406-41b5-e857-301f43843e00/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "19.99",
    info: "Product sold out",
    stock: "~",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/2bea13a5-8750-45c2-5373-13393363cb00/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "13.99",
    info: "Product sold out",
    stock: "~",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/483c9d74-6f4f-46bb-1dc1-902ca558f400/shopitem",
    title:
      "Discord Token AIO Verifier (Email & Phone) - WITH FREE EMAIL VERIFICATION",
    price: "",
    info: "Product sold out",
    stock: "",
  },
  {
    img: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/f388b543-6406-41b5-e857-301f43843e00/shopitem",
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
