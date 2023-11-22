import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Pdetails from "../assets/pdetails.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ami, tumi } from "../components/slice/productSlice";
const ProductDetails = () => {
  let amitumi = useSelector((state) => state.product);
  console.log(amitumi);
  let dispatch = useDispatch();

  let productId = useParams();

  let [single, setSingle] = useState([]);
  let [singletext, setSingleText] = useState({});

  let getdata = () =>
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingle(response.data.images);
        setSingleText(response.data);
      });
  useEffect(() => {
    getdata();
  }, []);

  let handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let handleIncrement = () => {
    dispatch(ami());
    dispatch(tumi(44.0));
  };
  return (
    <div>
      <Container>
        <h2 className="font-sans text-[40px] font-blod">Product Details</h2>
        <div className="flex flex-wrap justify-center">
          {single.map((item) => (
            <div className="w-1/4">
              <img src={item} alt="details" />
            </div>
          ))}
        </div>
        <h2 className="font-sans text-[30px] font-blod text-[#262626]">
          {singletext.brand}
        </h2>
        <div className="flex items-center pt-10">
          <span className="font-sans text-[16px] font-blod pr-10">
            Qunatity:
          </span>
          <div className="flex items-center justify-around h-[50px] w-[200px] border-2 border-[#262626]">
            <div onClick={handleDecrement}>-</div>
            <div>{amitumi.value}</div>
            <div onClick={handleIncrement}>+</div>
          </div>
        </div>

        <div className="w-[30%] pb-10">
          <h3 className="py-3 font-sans text-[16px] font-normal text-[#262626]">
            Subtotal: <span className="font-bold">${amitumi.subtotal}</span>
          </h3>
          <div className="flex justify-between">
            <div className="">
              <a
                className="h-[50px] w-[170px] border-2 border-[#222] text-center leading-[50px] font-sans block text-[16px] font-normal text-[#262626] capitalize hover:bg-[#262626] hover:text-white"
                href="#"
              >
                Add To Wishlist
              </a>
            </div>
            <div className="">
              <Link
                to="/cart"
                className="h-[50px] w-[170px] border-2 border-[#222] text-center leading-[50px] font-sans block text-[16px] font-normal text-[#262626] capitalize hover:bg-[#262626] hover:text-white"
              >
                Add To cart
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
