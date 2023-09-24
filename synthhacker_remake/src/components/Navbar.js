import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // add all the quantities form the objects
  let totalQuantity = 0;
  for (let i = 0; i < products.length; i++) {
    totalQuantity += products[i].quantity;
  }

  return (
    <nav className="nav-container">
      <div className="logo">
        <a href="/home">Matthew Postrel Sounds</a>
      </div>

      <div className="tabs">
        <a href="/serum">Serum</a>
        <a href="/drums">Drums</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="cart">
        <a href="/cart">Cart({totalQuantity})</a>
      </div>
    </nav>
  );
}
export default Navbar;
