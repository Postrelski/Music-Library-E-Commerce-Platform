import Product from "./Product.js";
import "./ProductList.css";
import pic from "../assets/synth.png";
import { useState } from "react";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

function ProductList(props) {
  const slides = [
    { title: "Product 1", price: 10, href: "/item", pic: pic, key: 1 },
    { title: "Product 2", price: 15, href: "/item2", pic: pic, key: 2 },
    { title: "Product 3", price: 5, href: "/item3", pic: pic, key: 3 },
    { title: "Product 4", price: 5, href: "/item3", pic: pic, key: 4 },
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
