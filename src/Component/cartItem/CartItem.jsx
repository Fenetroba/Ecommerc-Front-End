import React, { useContext } from "react";
import { ContextProvider } from "../context/Context";
import "./cartItem.css";
const CartItem = () => {
  const { Data, cartItem, Delet, TotalPriceItem } = useContext(ContextProvider);
  return (
    <div className="cartsItem">
      <div className="cartItem">
        <div className="items_detals">
          <p>Product</p>
          <p>Price</p>
          <p>Name</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {Data.map((element) => {
          if (cartItem[element.id] > 0) {
            return (
              <div className="cartElement">
                <img src={element.image} alt="pic" />

                <p>${element.newPrice}</p>
                <p>{element.title}</p>
                <p className="quantity">{cartItem[element.id]}</p>
                <p className="total">
                  ${cartItem[element.id] * element.newPrice}
                </p>
                <p>
                  {" "}
                  <button className="clear" onClick={() => Delet(element.id)}>
                    ❌
                  </button>
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>



      <div className="cartItemTotal">
        <div className="cartItem__total__contener">
          <h1>Cart Total</h1>
          <div className="cart__total_item">
            <h4>Total</h4>
            <h4>${TotalPriceItem()}</h4>
          </div>
          <hr />
          <div className="cart__total_item">
            <h4>Shoping Fee</h4>
            <h4>Free</h4>
          </div>
          <hr />
          <div className="cart__total_item">
            <h4>Total Fee</h4>
            <h4>${TotalPriceItem()}</h4>
          </div>
          <button className="process_Button">Procces To Check</button>
        </div>
        <div className="total__prom_code">
          <p>If You Have A Prompt Code,Enter To Hear</p>
          <div className="totlaProm_code_input">
            <input type="text" placeholder="prom code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
 
    </div>

  );
};

export default CartItem;
