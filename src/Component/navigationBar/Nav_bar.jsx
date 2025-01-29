import React, { useContext, useRef, useState } from "react";
import "./nav_bar.css";
import { FaCartShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import slieder3 from "../Asset/model-24481_640.png";
import { ContextProvider } from "../context/Context";

const Nav_bar = () => {
  const [ActiveNav, setActiveNav] = useState();
  const menuRef = useRef();
  const { CartItemNumber } = useContext(ContextProvider);
  const Nav__Menu = () => {
    menuRef.current.classList.toggle("ResponsivNav");
  };

  window.addEventListener("scroll", function () {
    let scrolled = this.document.getElementById("scroll");
    scrolled.classList.toggle('Stikiy',window.scrollY>0)
  });
  return (
    <div className="navBar" >
      <div className="navBar__contener" id="scroll">
        <div className="navBar__logo">
          AYU{" "}
          <span>
          Chiffon{" "}
            <img className="shofone_banner" src={slieder3} alt="image" />
          </span>
        </div>
        <div>
          <ul className="navBar__page" ref={menuRef}>
            <li
              onClick={() => {
                setActiveNav("SHOP");
              }}
              className={ActiveNav === "SHOP" ? "NavActiveted" : ""}
            >
              <Link to="/" className="colors">
                SHOP
              </Link>
            </li>
            <li
              onClick={() => {
                setActiveNav("WOMEN");
              }}
              className={ActiveNav === "WOMEN" ? "NavActiveted" : ""}
            >
              <Link to="/WOMEN" className="colors">
                WOMEN
              </Link>
            </li>
            <li
              onClick={() => {
                setActiveNav("MEN");
              }}
              className={ActiveNav === "MEN" ? "NavActiveted" : ""}
            >
              <Link to="/MEN" className="colors">
                MEN
              </Link>
            </li>
            <li
              onClick={() => {
                setActiveNav("KIDS");
              }}
              className={ActiveNav === "KIDS" ? "NavActiveted" : ""}
            >
              <Link to="/KIDS" className="colors">
                KIDS
              </Link>
            </li>
            <li className="naBar__LoginSign">
              <button className="navBar__login__btn">
              
                <Link to="/LOGIN" className="loginBtn">
                  LOGIN
                </Link>
                
              </button>
            </li>
          </ul>
        </div>

        <div className="navBar__login1cart">
          <div className="navBar__cart">
            <Link to="/Cart">
              {" "}
              <FaCartShopping className="navBar__cart__img" />
            </Link>
          </div>
          <p className="navBar__cart__counter">{CartItemNumber()}</p>

          <RiMenu3Line onClick={Nav__Menu} className="mobileMenu" />
        </div>
      </div>
      <hr />
      <div className="sliders">
        <p>
          Ayantu Chiffon  Dress Center <FaPhoneAlt /> +2519645299 <RiMailLine />{" "}
          ayantuTura@gmail.com{" "}
        </p>
      </div>

      <hr />
    </div>
  );
};

export default Nav_bar;
