import React from "react";
import Header from "../../../Layout/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet className="" />
    </>
  );
};

export default Home;
