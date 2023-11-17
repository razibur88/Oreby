import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "200px",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "#262626",
          borderRight: "4px white solid",
          padding: "20px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="bg-banner h-[600px] w-full"></div>
        <div className="bg-banner h-[600px] w-full"></div>
        <div className="bg-banner h-[600px] w-full"></div>
      </Slider>
    </div>
  );
};

export default Banner;
