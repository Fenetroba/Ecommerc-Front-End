import React, { createContext, useState } from "react";
import Data from "../Asset/AllProducts";
import Item from "../item/Item";
export const ContextProvider = createContext(null);
const cartNo = () => {
  const carts = {};
  for (let index = 0; index < Data.length; index++) {
    carts[index] = 0;
  }
  return carts;
};


const Context = ({ children }) => {
  const [cartItem, setCartItem] = useState(cartNo());
  const ADD = (ItemId) => {
    setCartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };

  
  const Delet = (ItemId) => {
    setCartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };
 

  const TotalPriceItem=()=>{
    let totalprice=0;
    for(const Item in cartItem){
      if(cartItem[Item]>0){
      let ItemInfo=Data.find((product)=>product.id===Number(Item))
      totalprice+=ItemInfo.newPrice*cartItem[Item]
      }
    }
    return totalprice
  }
  console.log(TotalPriceItem())

  const CartItemNumber=()=>{
    let numberOfItem=0;

    for(const item in cartItem  ){
      if(cartItem[item]>0){
        numberOfItem+=cartItem[item]
    
      }
    }
    return numberOfItem;
  }

  
  const ProductValue = { Data,cartItem,ADD,Delet,CartItemNumber,TotalPriceItem};

  return (
    <ContextProvider.Provider value={ProductValue}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
