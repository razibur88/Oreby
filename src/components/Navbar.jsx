import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiBars2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  let cartshowwww = useSelector((state) => state.product);
  console.log(cartshowwww);
  let [show, setShow] = useState(false);
  let [cartshow, setCartShow] = useState(false);
  let [signshow, setSignShow] = useState(false);
  let categoryshow = useRef();
  let cart = useRef();
  let sign = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryshow.current.contains(e.target)) {
        setShow(true);
      } else {
        if (e.target.tagName != "LI") {
          setShow(false);
        }
      }
    });

    document.body.addEventListener("click", (e) => {
      if (cart.current.contains(e.target)) {
        setCartShow(true);
      } else {
        setCartShow(false);
      }
    });
    document.body.addEventListener("click", (e) => {
      if (sign.current.contains(e.target)) {
        setSignShow(true);
      } else {
        setSignShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-5">
      <Container className="pt-5">
        <div className="flex items-center">
          <div className="w-1/4 relative">
            <div className="flex gap-x-2 items-center" ref={categoryshow}>
              <HiBars2 />
              <span>Shop by Category</span>
            </div>
            {show && (
              <div className="absolute left-0 top-[60px] w-[265px] bg-[#262626] z-50">
                <ul>
                  <li className="font-sans font-normal text-[16px] text-white py-3 px-4 hover:pl-6 ease-in duration-300">
                    Accesories
                  </li>
                  <li className="font-sans font-normal text-[16px] text-white py-3 px-4 hover:pl-6 ease-in duration-300">
                    Furniture
                  </li>
                  <li className="font-sans font-normal text-[16px] text-white py-3 px-4 hover:pl-6 ease-in duration-300">
                    Electronics
                  </li>
                  <li className="font-sans font-normal text-[16px] text-white py-3 px-4 hover:pl-6 ease-in duration-300">
                    Clothes
                  </li>
                  <li className="font-sans font-normal text-[16px] text-white py-3 px-4 hover:pl-6 ease-in duration-300">
                    Bags
                  </li>
                  <li className="font-sans font-normal text-[16px] text-white py-3 px-4 hover:pl-6 ease-in duration-300">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-1/2">
            <div className="relative">
              <input
                className="bg-white w-full py-3 px-3 placeholder-[#C4C4C4
                ] outline-0"
                type="search"
                placeholder="Search Products"
              />
              <FaSearch className="absolute top-[50%] translate-y-[-50%] right-5" />
            </div>
          </div>
          <div className="w-1/4 relative">
            <div className="flex justify-end items-center">
              <div className="flex" ref={sign}>
                <FaUser />
                <IoMdArrowDropdown className="mr-3" />
              </div>

              <div ref={cart}>
                <button
                  type="button"
                  class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
                >
                  <IoCartSharp />
                  <span class="sr-only">Notifications</span>
                  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                    {cartshowwww.value}
                  </div>
                </button>
              </div>
            </div>
            {cartshow && (
              <div className="w-[358px] bg-[#F0F0F0] py-5 absolute top-[50px] right-0 z-50">
                <div className="flex justify-around items-center">
                  <div className="w-[80px] h-[80px] bg-[#D8D8D8]"></div>
                  <div className="">
                    <h3 className="font-sans text-[16px] font-bold text-[#262626]">
                      Black Smart Watch
                    </h3>
                    <p className="font-sans text-[16px] font-bold text-[#262626]">
                      $44.00
                    </p>
                  </div>
                  <div className="">
                    <RxCross2 />
                  </div>
                </div>
                <h3 className="pl-5 py-3 font-sans text-[16px] font-normal text-[#262626]">
                  Subtotal: <span className="font-bold">$44.00</span>
                </h3>
                <div className="flex justify-around">
                  <div className="">
                    <a
                      className="h-[50px] w-[148px] border-2 border-[#222] text-center leading-[50px] font-sans block text-[16px] font-normal text-[#262626] capitalize hover:bg-[#262626] hover:text-white"
                      href="#"
                    >
                      view cart
                    </a>
                  </div>
                  <div className="">
                    <a
                      className="h-[50px] w-[148px] border-2 border-[#222] text-center leading-[50px] font-sans block text-[16px] font-normal text-[#262626] capitalize hover:bg-[#262626] hover:text-white"
                      href="#"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            )}
            {signshow && (
              <div className="w-[200px] bg-[#F0F0F0] absolute top-[50px] right-0 z-50">
                <ul className="text-center">
                  <li className="font-sans text-[16px] font-bold text-[#262626] ease-in duration-300 leading-[50px] hover:bg-[#262626] hover:text-white">
                    My Account
                  </li>
                  <li className="font-sans text-[16px] font-bold text-[#262626] ease-in duration-300 leading-[50px] hover:bg-[#262626] hover:text-white">
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
