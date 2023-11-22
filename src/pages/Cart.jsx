import React, { useState } from "react";
import Container from "../components/Container";
import { RxCross2 } from "react-icons/rx";
import Detail from "../assets/detail.png";
import { useSelector } from "react-redux";

const Cart = () => {
  let amitumicart = useSelector((state) => state.product);
  let [count, setCount] = useState(0);

  let handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="my-20">
      <Container>
        <h2 className="font-sans text-[40px] font-blod">Cart</h2>
        <table className="bg-[#F5F5F5] py-10 w-full">
          <thead>
            <tr className="bg-[#F5F5F5] py-10">
              <th className="font-sans text-[20px] font-bold text-[#262626]">
                Product
              </th>
              <th className="font-sans text-[20px] font-bold text-[#262626]">
                Price
              </th>
              <th className="font-sans text-[20px] font-bold text-[#262626]">
                Quantity
              </th>
              <th className="font-sans text-[20px] font-bold text-[#262626] text-center">
                Total
              </th>
            </tr>
          </thead>
        </table>
        <div className="flex items-center py-20">
          <div className="w-[25%]">
            <div className="flex items-center justify-between">
              <RxCross2 />
              <img src={Detail} alt="" />
              <h3 className="font-sans text-[20px] font-bold text-[#262626]">
                Product name
              </h3>
            </div>
          </div>
          <div className="w-[25%]">
            <h3 className="text-center">${amitumicart.subtotal}</h3>
          </div>
          <div className="w-[25%]">
            <div className="flex items-center">
              <span className="font-sans text-[16px] font-blod pr-10">
                Qunatity:
              </span>
              <div className="flex items-center justify-around h-[50px] w-[200px] border-2 border-[#262626]">
                <div>{amitumicart.value}</div>
              </div>
            </div>
          </div>
          <div className="w-[25%]">
            <h3 className="text-center">$44.44</h3>
          </div>
        </div>
        <div className="relative">
          <div className="w-[30%] absolute bottom-0 right-0">
            <div className="flex justify-between items-center">
              <h3>SubTotal</h3>
              <h3>3000</h3>
            </div>
            <div className="flex justify-between items-center pt-3">
              <h3>Total</h3>
              <h3>3000</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
