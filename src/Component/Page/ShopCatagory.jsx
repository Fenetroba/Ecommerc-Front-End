import React, { useContext, useState } from "react";
import "./shopcatagory.css";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
// import slieder1 from "";
// import slieder2 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62VahNiNwZFc1CpPLrpqsiEUjytaHyoApnxe8vcrKgMfBMhGrPgiUPZUKybNG1_8MAF8&usqp=CAU"
// import slieder4 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62VahNiNwZFc1CpPLrpqsiEUjytaHyoApnxe8vcrKgMfBMhGrPgiUPZUKybNG1_8MAF8&usqp=CAU";
import { ContextProvider } from "../context/Context";
import Item from "../item/Item";
import Women from "./Women";
import { FaBedPulse } from "react-icons/fa6";

const ShopCatagory = ({ banner }) => {
  const { Data } = useContext(ContextProvider);
  const [slider, setslider] = useState(false);

  return (
    <div className="ShopeCatagory">
      {banner === "Woman" && <Women />}
      <div className="shopcategory__contener">
        {Data.map((item, i) => {
          if (banner === item.category) {
            return <Item products={item} key={item.id} />;
          }
        })}
      </div>
      <div className="shopCatagory__slider">
        <div className="additionalProducts">
        <h2 style={{padding:'10px'}}>Additional</h2>
        <span onClick={() => setslider((s) => !slider)}>
          {slider ? "➖" : "➕"}
        </span>
        </div>
        {slider && (
          <Swiper
            className="swiper"
            spaceBetween={100}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              738: {
                slidesPerView: 2,
              },
              1187: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1500,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="card card1">
                <div className="content">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lgd0hApTJEcW4RzmCcW-ttGTa-i2EZw9U78pFyCSUtfYplonRbeXk8yGy_W4PughBlU&usqp=CAU" alt="slieder" />
                  <h6>FaceBook Post</h6>
                  <h6>FaceBook</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card1">
                <div className="content">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mrhklJVaN1Z279i3wHSqXpSRbDZjieCJBuTWA6n-ddZt2jS0uAZmjtPNnmldaM6wE5c&usqp=CAU" alt="slieder" />
                  <h6>FaceBook Post</h6>
                  <h6>FaceBook</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card2">
                <div className="content">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAlOAIs86PPgux7ruQgxDjbgREl-4x-csVbo16YPI5AZJHTciit1gF0LzIViFKSIF2Yk&usqp=CAU" alt="slieder" />
                  <h6>FaceBook Post</h6>
                  <h6>FaceBook</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card3">
                <div className="content">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62VahNiNwZFc1CpPLrpqsiEUjytaHyoApnxe8vcrKgMfBMhGrPgiUPZUKybNG1_8MAF8&usqp=CAU" alt="slieder" />
                  <h6>FaceBook Post</h6>
                  <h6>FaceBook</h6>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ShopCatagory;
