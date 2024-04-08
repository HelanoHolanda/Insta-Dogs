import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
const DefaultLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayouts;
