import React, { useState } from "react";
import Header from "../header/Header";

import Offering from "../offering/Offering";
import SampleProduct from "../sampleProduct/SampeProduct";
const Shop = () => {

  return (
    <div>
      <Header />
      <SampleProduct/>
      <Offering/>
    </div>
  );
};

export default Shop;
