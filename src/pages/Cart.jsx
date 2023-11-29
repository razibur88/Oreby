import React, { useState } from "react";
import Container from "../components/Container";
import { RxCross2 } from "react-icons/rx";
import Detail from "../assets/detail.png";
import { useDispatch, useSelector } from "react-redux";
import {
  minsToCart,
  qunatityUpdate,
  removeToCart,
} from "../components/slice/productSlice";

const Cart = () => {
  let data = useSelector((state) => state.cartItem.cartItem);
  let dispatch = useDispatch();

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
        {data.map((item, index) => (
          <div className="flex items-center pt-10">
            <div className="w-[25%]">
              <div className="flex items-center justify-end">
                <div className="w-[30%]">
                  <div className="flex items-center justify-between">
                    <div onClick={() => dispatch(removeToCart(index))}>
                      <RxCross2 />
                    </div>
                    <img
                      className="h-[70px] w-[70px]"
                      src={item.thumbnail}
                      alt="ami"
                    />
                  </div>
                </div>
                <div className="w-[70%]">
                  <h3 className="font-sans text-[16px] font-bold text-[#262626] text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <h3 className="text-center">${item.price}</h3>
            </div>
            <div className="w-[25%]">
              <div className="flex items-center">
                <span className="font-sans text-[16px] font-blod pr-10">
                  Qunatity:
                </span>

                <div className="flex items-center justify-around h-[50px] w-[200px] border-2 border-[#262626]">
                  <div>
                    <button onClick={() => dispatch(minsToCart(index))}>
                      -
                    </button>
                  </div>
                  <div>{item.qun}</div>
                  <div onClick={() => dispatch(qunatityUpdate(index))}>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <h3 className="text-center">${item.price * item.qun}</h3>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Cart;
