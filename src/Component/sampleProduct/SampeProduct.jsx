import React from "react";
import allproduct from "../Asset/AllProducts";
import "./sampleproduct.css";
import Item from "../item/Item";
const SampeProduct = () => {
  return (
    <div className="sampleProduct__contenet">
      <div className="sampleProducts">
        <h1>Our Products</h1>
        <div className="sampleproduct__main__contener">
          {allproduct.map((eachItem) => (
            <Item products={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampeProduct;
