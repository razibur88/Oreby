import React from "react";
import Container from "./Container";
import FooterLogo from "../assets/logo.png";
const Footer = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-[#F5F5F5] py-5">
      <Container>
        <div className="flex">
          <div className="w-[15%]">
            <h3 className="font-sans font-blod text-[16px] text-[#262626] uppercase">
              Menu
            </h3>
            <ul className="pt-3">
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Home
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Shop
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                About
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Contact
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Journal
              </li>
            </ul>
          </div>
          <div className="w-[15%]">
            <h3 className="font-sans font-blod text-[16px] text-[#262626] uppercase">
              Shop
            </h3>
            <ul className="pt-3">
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Category 1
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Category 2
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Category 3
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Category 4
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626]">
                Category 5
              </li>
            </ul>
          </div>
          <div className="w-[20%]">
            <h3 className="font-sans font-blod text-[16px] text-[#262626] uppercase">
              HELP
            </h3>
            <ul className="pt-3">
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Privacy Policy
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Terms & Conditions
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Special E-shop
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626] pt-2">
                Shipping
              </li>
              <li className="font-sans font-normal text-[16px] text-[#262626]">
                Secure Payments
              </li>
            </ul>
          </div>
          <div className="w-[25%]">
            <h3 className="font-sans font-blod text-[16px] text-[#262626]">
              (052) 611-5711
            </h3>
            <h4 className="font-sans font-blod text-[16px] text-[#262626]">
              company@domain.com
            </h4>
            <p className="pt-5">575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="w-[25%]">
            <div className="flex justify-center">
              <img src={FooterLogo} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
