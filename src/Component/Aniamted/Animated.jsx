import React from "react";
import Shop from "../../Component/Page/Shop";
import Login from "../../Component/Page/Login";
import Cart from "../../Component/Page/Cart";
import ShopCatagory from "../../Component/Page/ShopCatagory";
import Product from "../../Component/Page/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../Page/SignUp";
const Animated = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Men" element={<ShopCatagory banner="man" />} />
        <Route path="/Women" element={<ShopCatagory banner="Woman" />} />
        <Route path="/Kids" element={<ShopCatagory banner="kids" />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Product" element={<Product />}>
          <Route path=":ProductId" element={<Product />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Animated;
