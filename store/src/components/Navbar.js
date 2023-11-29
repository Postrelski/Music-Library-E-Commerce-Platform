import React, { useState } from "react";
import "./styles/Navbar.css";

function Navbar(props) {
  // get the data from local storage
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // add all the quantities from the objects
  let totalQuantity = 0;
  for (let i = 0; i < products.length; i++) {
    totalQuantity += Number(products[i].quantity);
  }

  // dynamically set the nav icon
  const [bars, setBars] = useState("tabs tabs-hidden");
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
