import React from "react";
import Container from "./Container";
import One from "../assets/Ad_1.png";
import two from "../assets/Ad_2.png";
import three from "../assets/Ad_3.png";

const Sales = () => {
  return (
    <div className="py-12">
      <Container>
        <div className="flex gap-x-4">
          <div className="w-1/2">
            <img src={One} alt="one" />
          </div>
          <div className="w-1/2">
            <div className="">
              <img src={two} alt="two" />
            </div>
            <div className="mt-8">
              <img src={three} alt="three" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sales;
