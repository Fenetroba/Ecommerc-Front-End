import React from "react";
import leftImage from "../Asset/clothes-1839935_640 (1).jpg";
import "./offering.css";
const Offering = () => {
  return (
    <div className="offering">
      <h1> Offering 20% Discounte</h1>
      <div className="offering_contener">
        <div className="offering__contener_left">
          <img src={leftImage} alt="leftImage" />
        </div>
        <div className="offering__contener_right">
          <input
            type="email"
            placeholder="enter your Gmail Addres"
            className="offer_contener_right_email"
          />
          <input
            type="password"
            placeholder="Password"
            className="offer_contener_right_password"
          />

          <h2 className="offer_contener_right_signIn">SIGN IN</h2>
        </div>
      </div>
    </div>
  );
};

export default Offering;
