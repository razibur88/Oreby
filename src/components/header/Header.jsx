import React from "react";
import Container from "../Container";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4">
      <Container>
        <div className="flex items-center">
          <div className="w-2/6">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-2/3">
            <ul className="flex justify-end gap-x-5">
              <li>
                <Link className="font-sans font-normal text-[16px] text-[#262626]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="font-sans font-normal text-[16px] text-[#262626]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  className="font-sans font-normal text-[16px] text-[#262626]"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-sans font-normal text-[16px] text-[#262626]"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="font-sans font-normal text-[16px] text-[#262626]"
                  href="#"
                >
                  Journal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
