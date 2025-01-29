import React, { useState } from "react";
import "./header.css";
import LeftImagr from "../Asset/1000009341-removebg (1).png";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Header = () => {
  const [sliderIcone, setSlideIcon] = useState(false);
  const sliderHandler = () => {
    setSlideIcon((sliderIcone) => !sliderIcone);
  };
  return (
    <div className="Header">
     <div className="example">
    <div className="block">
        <div className="side -main"></div>
        <div className="side -left"></div>
    </div>
    <div className="block">
        <div className="side -main"></div>
        <div className="side -left"></div>
    </div>
    <div className="block">
        <div className="side -main"></div>
        <div className="example"></div>
    </div>
    
  
    
</div>

      <div
        className="LeftSlider"
        style={sliderIcone ? { left: 0 } : { left: -60 }}
      >
        <div className={sliderIcone ? "active" : ""}>
          <div className="controlerIcon" onClick={sliderHandler}>
            {sliderIcone ? <RiArrowLeftWideFill /> : <RiArrowRightWideFill />}
          </div>
          <div className="header__social">
            <span>
              <FaFacebook className="faceBook" />
            </span>
            <span>
              <FaInstagram className="inista" />
            </span>
            <span>
              <FaTwitter className="twitter" />
            </span>
            <span>
              <FaLinkedin className="linkedin" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
