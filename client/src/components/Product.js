import React from "react";
import "./styles/Product.css";

function Product(props) {
  return (
    <div className="product-container">
      <a href={props.href}>
        <img className="serum_product_images" src={props.pic}></img>
      </a>
      <a href={props.href}>
        <p className="opacity">{props.title}</p>
      </a>
      <p className="opacity">${props.price}</p>
    </div>
  );
}

export default Product;
