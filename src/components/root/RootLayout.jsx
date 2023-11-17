import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
