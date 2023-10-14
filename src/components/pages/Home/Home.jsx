import React, { useEffect } from "react";
import Header from "../../../Layout/Header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location.pathname", location.pathname)

  useEffect(() => {

    location.pathname === "/" && navigate("/dashboard/overview");

  }, [])

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
