import Product from "./Product.js";
import "./ProductList.css";
import pic from "../assets/synth.png";
import { useState } from "react";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

function ProductList(props) {
  const slides = [
    { title: "Product 1", price: 10, href: "/item1", pic: pic1, key: 1 },
    { title: "Product 2", price: 15, href: "/item2", pic: pic2, key: 2 },
    { title: "Product 3", price: 5, href: "/item3", pic: pic3, key: 3 },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1300, itemsToShow: 3 },
    { width: 1700, itemsToShow: 4 },
  ];

  return (
    <div className="slider-container">
      <Carousel breakPoints={breakPoints}>
        {slides.map((item) => (
          <Product
            className="product"
            title={item.title}
            key={item.key}
            price={item.price}
            href={item.href}
            pic={item.pic}
          />
        ))}
      </Carousel>
    </div>
  );
}
export default ProductList;
