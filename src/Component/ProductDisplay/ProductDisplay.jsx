import React, { useContext } from "react";
import './productDispalay.css'
import { AiFillStar } from "react-icons/ai";
import { FaShopify, FaStarHalf } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { ContextProvider } from "../context/Context";

const ProductDisplay = ({ products }) => {
  const {ADD}=useContext(ContextProvider)
  
  return (
    <div className="ProductDispalay">
      <div className="productDisplay__contener">
        <div className="productDisplay__contener__right">
          <img src={products.image} alt="selected Image" />
        </div>

        <div className="productDispalay__contner__left">
          <h1>{products.title}</h1>
          <div className="productDisplay__contener__left_star">
            <AiFillStar className="productDispalay_star" />
            <AiFillStar className="productDispalay_star" />
            <AiFillStar className="productDispalay_star" />
            <AiFillStar className="productDispalay_star" />
            <FaStarHalfAlt className="productDispalay_star" />
          </div>
          <div className="productDispalay__contener__left__price">
            <div className="left__oldpric">{products.prevPrice}</div>
            <div className="left__newpric">{products.newPrice}</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            laboriosam doloribus, possimus animi
          </p>
          <div className="productDisplay__contener__left__select_size">
            <span>SMALL</span>
            <span>LARG</span>
            <span>XL</span>
            <span>XXL</span>
          </div>

          <button onClick={()=>{ADD(products.id)}}>ADD TO CART <FaShopify/></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
