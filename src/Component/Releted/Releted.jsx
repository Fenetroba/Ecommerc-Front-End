import React, { useContext, useState } from "react";
import "./releted.css";
import { ContextProvider } from "../context/Context";
import Item from "../item/Item";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const Releted = () => {
  const { Data } = useContext(ContextProvider);

  // const [imageSlider,setImageSlider]=useState('0')
  // const imageslideHandler=()=>{
  //   setImageSlider(imageSlider.)

  // }
  return (
    <div className="reletedProduct">
      <h1>RELETED PRODUCTS</h1>
      <div className="itemProduct">
        <h1><FaArrowLeftLong/></h1>
      <div className="reletedProduct__contener">
        {Data.map((item, i) => (
          <Item products={item} key={item.id} />
        ))}
      </div>
      <h1><FaArrowRightLong/></h1>
      </div>
    </div>
  );
};

export default Releted;
