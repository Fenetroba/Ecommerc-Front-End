import React from "react";
import product1 from "./Product1.png";
import product2 from "./product2.png";
import product3 from "./product3.png";
import product4 from "./product4.png";
import product5 from "./product5.png";
import product6 from "./product6.png";
import product7 from "./product7.png";
import product8 from "./product8.png";
import {AiFillStar}from "react-icons/ai"
const SampleProduct = [
  {
    image: product1,
    id:1,
    title: "normal",
    star: <AiFillStar className="rating-star" />,
    prevPrice: 140,
    newPrice: 40,
    company: "Ayu",
    color: "red",
    category: "Woman",
  },
  {
    image: product2,
    id:2,
    title: "normal ",
    star: <AiFillStar className="rating-star" />,
    prevPrice: 140,
    newPrice: 40,
    company: "Ayu",
    color: "red",
    category: "Woman",
  },
  {
    image: product3,
    id:3,
    title: "normal",
    star: <AiFillStar className="rating-star" />,
    prevPrice: 140,
    newPrice: 40,
    company: "Ayu",
    color: "yellow",
    category: "Woman",
  },
  {
    image: product4,
    id:4,
    title: "Prom ",
    star: <AiFillStar className="rating-star" />,
    prevPrice: 140,
    newPrice: 40,
    company: "Ayu",
    color: "yellow",
    category: "Woman",
  },
  {
    image: product5,
    id:5,
    title: "normal",
    star: <AiFillStar className="rating-star" />,
    prevPrice: 140,
    newPrice: 40,
    company: "Ayu",
    color: "red",
    category: "Woman",
  },
  {
    image: product6,
    id:6,
    title: "selina",
    star: <AiFillStar className="rating-star" />,
    prevPrice: 140,
    newPrice: 40,
    company: "Ayu",
    color: "black",
    category: "man",
  },
  
    {
      image: product7,
      id:7,
      title: "normal ",
      star: <AiFillStar className="rating-star" />,
      prevPrice: 140,
      newPrice: 40,
      company: "Ayu",
      color: "red",
      category: "man",
    },
  {
    image: product8,
    id:8,
    title: "Wedding",
    star: <AiFillStar className="rating-star" />,
    prevPrice: 140,
    newPrice: 40,
    company: "Ayu",
    color: "black",
    category: "kids",
  },
];
export default SampleProduct;
