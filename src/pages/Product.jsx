import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pimage from "../assets/image.png";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);


  let getdata = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProduct(response.data.products));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Container>
      <div className="flex justify-between flex-wrap">
        {product.map((item) => (
          <div className="w-[24%]">
            <Link to={`/product/${item.id}`}>
              <div className="relative group">
                <img src={item.thumbnail} alt="ami" className="h-[300px]" />
                <div className="absolute bg-[#F5F5F5] opacity-0 overflow-hidden w-full h-[0px] right-0 bottom-[40px] ease-in duration-300 group-hover:h-[120px] group-hover:opacity-100">
                  <ul className="absolute bottom-0 right-0 h-[100px] w-full bg-[#F5F5F5] text-end">
                    <li>
                      <Link to="/cart">
                        <span className="font-sans text-[16px] font-normal ease-in duration-300 text-[#767676] hover:text-[#262626] hover:text-font-blod">
                          Add to Wish List
                        </span>
                        <FaHeart className="inline-block" />
                      </Link>
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
                    {item.title}
                  </h2>
                  <h4 className="font-sans text-[20px] font-normal text-[#767676]">
                    {item.price}
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Product;
