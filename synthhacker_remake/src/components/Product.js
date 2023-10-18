import React from "react";
import "./Product.css";

function Product(props, getFromChild) {
  //   getFromChild(props.title);
  return (
    <div className="product-container">
      <a href={props.href}>
        <img src={props.pic}></img>
      </a>
      <a href={props.href}>
        <p className="opacity">{props.title}</p>
      </a>
      <p className="opacity">${props.price}</p>
    </div>
  );
}

export default Product;
