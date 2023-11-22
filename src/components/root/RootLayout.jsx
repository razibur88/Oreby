import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
