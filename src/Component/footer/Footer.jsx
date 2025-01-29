import React from "react";
import "./fotter.css";
import logo from "../Asset/model-24481_640.png";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logoWith__title">
        <h1>AYU Chiffon </h1>
        <img src={logo} width={30} height={30} />
      </div>
<div className="leftAndRightContener">
      <div className="footer__contener">
        <h2>Contact Us</h2>
        <p><FaTelegram/> Telegram</p>
        <p><FaInstagram/> InstaGram</p>
        <p><FaTiktok/> Tiktok</p>
        <p><FaFacebook/> Feacbook</p>
      </div>
      <div className="footer__contener__lower">

        <h3>COMPANY</h3>
        <ul>
          <li>About us</li>
          <li>Contact</li>
          <li>News</li>
          <li>Support</li>
        </ul>
      </div>
      </div>
      <div className="email__section">
        <input type="email" placeholder="Enter Email Addres" />
        <button>Sigh In</button>
      </div>
    </div>
  );
};

export default Footer;
