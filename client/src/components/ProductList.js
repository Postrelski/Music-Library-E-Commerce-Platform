import Product from "./Product.js";
import "./styles/ProductList.css";
import React from "react";
import Carousel from "react-elastic-carousel";
import data from "../data.json";

function ProductList(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1300, itemsToShow: 3 },
    { width: 1700, itemsToShow: 4 },
  ];

  return (
    <div className="slider-container">
      <Carousel breakPoints={breakPoints}>
        {data.map((item) => (
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
