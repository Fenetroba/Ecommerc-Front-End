import React, { useContext } from "react";
import { ContextProvider } from "../context/Context";
import { useParams } from "react-router-dom";
import Breadgrem from "../breadCrum/breadgrem";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import Releted from "../Releted/Releted";

const Product = () => {
  const { Data } = useContext(ContextProvider);
  const { ProductId } = useParams();
  const Product=Data.find((e)=>e.id===Number(ProductId))

  return (
    <div>
     
      <Breadgrem products={Product} />
      <ProductDisplay products={Product}/>
      <Releted/>
    </div>
  );
};

export default Product;
