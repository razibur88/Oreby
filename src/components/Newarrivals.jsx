import React, { useEffect, useState } from "react";

import Container from "./Container";
import ImageOne from "../assets/image.png";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useContext } from "react";

import Slider from "react-slick";
import { AppContext } from "../Context";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="h-[40px] w-[40px] bg-[green] rounded-full flex justify-center items-center absolute top-[50%] right-[0px] z-50 translate-y-[-50%]"
    >
      <div className="">
        <MdArrowBackIosNew />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="h-[40px] w-[40px] bg-[green] rounded-full flex justify-center items-center absolute top-[50%] left-0 z-50 translate-y-[-50%]"
    >
      <MdArrowForwardIos />
    </div>
  );
}

const Newarrivals = () => {
  let dataHome = useContext(AppContext);
  console.log(dataHome, "home");

  var arrivals = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <div className="">
        <h2 className="font-sans text-[40px] font-bold text-[#262626]">
          New Arrivals
        </h2>
        <div className=" gap-x-5 py-10">
          <Slider {...arrivals}>
            {dataHome.map((item) => (
              <Link to="/cart">
                <div className="relative group !w-[95%]">
                  <img src={item.images[0]} alt="ami" className="h-[300px]" />
                  <div className="absolute bg-[#F5F5F5] opacity-0 overflow-hidden w-full h-[0px] right-0 bottom-[40px] ease-in duration-300 group-hover:h-[120px] group-hover:opacity-100">
                    <ul className="absolute bottom-0 right-0 h-[100px] w-full bg-[#F5F5F5] text-end">
                      <li>
                        <span className="font-sans text-[16px] font-normal ease-in duration-300 text-[#767676] hover:text-[#262626] hover:text-font-blod">
                          Add to Wish List
                        </span>{" "}
                        <FaHeart className="inline-block" />
                      </li>

                      <li>
                        <span className="font-sans text-[16px] font-normal ease-in duration-300 text-[#767676] hover:text-[#262626] hover:text-font-blod">
                          Compare
                        </span>{" "}
                        <LuRefreshCw className="inline-block" />
                      </li>

                      <Link to="/cart">
                        <li>
                          <span className="font-sans text-[16px] font-normal ease-in duration-300 text-[#767676] hover:text-[#262626] hover:text-font-blod">
                            Add to Cart
                          </span>{" "}
                          <FaShoppingCart className="inline-block" />
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <h2 className="font-sans text-[20px] font-bold text-[#262626]">
                      Basic Crew Neck Tee
                    </h2>
                    <h4 className="font-sans text-[20px] font-normal text-[#767676]">
                      $44.00
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Newarrivals;
