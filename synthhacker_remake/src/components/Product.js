import React from "react";
import "./Product.css";

function Product(props, getFromChild) {
  //   getFromChild(props.title);
  return (
    <div className="product-container">
      <a href={props.href}>
        <img src={props.pic}></img>
      </a>
      <a href={props.href}>{props.title}</a>
      <p>${props.price}</p>
    </div>
  );
}

export default Product;
