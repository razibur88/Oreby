import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Pdetails from "../assets/pdetails.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/productSlice";

const ProductDetails = () => {
  let productId = useParams();
  let dispatch = useDispatch();
  const [singleproduct, setSingleProduct] = useState({});

  let getdata = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  let handlesingledate = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }));
    
  };
  return (
    <div>
      <Container>
        <h2 className="font-sans text-[40px] font-blod">Product Details</h2>

        <div>
          <div className="flex flex-wrap ">
            {singleproduct?.images?.map((item) => (
              <div className="w-1/4">
                <img src={item} alt="details" />
              </div>
            ))}
          </div>

          <h2 className="font-sans text-[30px] font-blod text-[#262626]">
            {singleproduct.title}
          </h2>

          <div className="w-[30%] pb-10 mt-5">
            <div className="flex justify-between">
              <div className="">
                <a
                  className="h-[50px] w-[170px] border-2 border-[#222] text-center leading-[50px] font-sans block text-[16px] font-normal text-[#262626] capitalize hover:bg-[#262626] hover:text-white"
                  href="#"
                >
                  Add To Wishlist
                </a>
              </div>
              <div onClick={() => handlesingledate(singleproduct)}>
                <Link to="/cart">
                  <div className="h-[50px] w-[170px] border-2 border-[#222] text-center leading-[50px] font-sans block text-[16px] font-normal text-[#262626] capitalize hover:bg-[#262626] hover:text-white">
                    Add To cart
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
