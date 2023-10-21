import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  const [bars, setBars] = useState("tabs tabs-hidden");
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // add all the quantities from the objects
  let totalQuantity = 0;
  for (let i = 0; i < products.length; i++) {
    totalQuantity += products[i].quantity;
  }

  // dynamically set the nav icon
  function barsIconHandler() {
    if (bars === "tabs") {
      setBars("tabs tabs-hidden");
    } else {
      setBars("tabs");
    }
  }

  return (
    <nav className="nav-container">
      <div className="logo">
        <a href="/home">MATTHEW // POSTREL</a>
      </div>

      <div className="nav-bars">
        <i
          onClick={barsIconHandler}
          className="fa-solid fa-bars hamburger-icon"
        ></i>

        <div className="cart">
          <a href="/cart">
            <span className="cart-text">Cart({totalQuantity})</span>
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
          </a>
        </div>
      </div>

      <div className={`${bars} nav_tabs`}>
        <a href="/serum">Serum</a>
        <a href="/drums">Drums</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;
