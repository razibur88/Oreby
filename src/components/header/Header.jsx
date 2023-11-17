import React from "react";
import Container from "../Container";
import Logo from "../../assets/logo.png";

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
                <a
                  className="font-sans font-normal text-[16px] text-[#262626]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-sans font-normal text-[16px] text-[#262626]"
                  href="#"
                >
                  Shop
                </a>
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
