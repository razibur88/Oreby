import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Sales from "../components/Sales";
import Newarrivals from "../components/Newarrivals";

const Home = () => {
  return (
    <>
      <Banner />
      <Sales />
      <Newarrivals />
    </>
  );
};

export default Home;
