import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import './breadgrem.css'
const Breadgrem = (props) => {
  const { products } = props;
  return (
    <div className="breadGrem">
      HOME {`/Product/${products.prevPrice} `}
      <AiOutlineArrowRight />
      {products.category} <AiOutlineArrowRight />
      {products.title}
    </div>
  );
};

export default Breadgrem;
