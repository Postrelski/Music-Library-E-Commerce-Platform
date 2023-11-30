import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import Update from "../components/buttons/Update";
import Checkout from "../components/buttons/Checkout";

import "./styles/Cart.css";

function Cart() {
  // get the array from local storage
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // find the total number of products
  let total = 0;
  products.map((x) => (total += Number(x.quantity) * Number(x.price)));

  // wipe the cart clean
  function clearShoppingCart() {
    window.localStorage.clear();
  }

  // Call to backend Stripe API
  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: products }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); //forwarding user to stripe
        }
      });

    clearShoppingCart();
  };

  function updateLocal() {
    console.log("inside Cart.js, update the local storage and refresh");
  }

  return (
    <>
      <Navbar />
      {total == 0 && (
        <p className="empty_cart">Looks like your cart is empty!</p>
      )}
      {total > 0 && (
        <div className="class_items_box">
          {products.map((x) => (
            <CartItems
              id={x.productID}
              key={x.productID}
              title={x.title}
              pic_url={x.pic_url}
              quantity={x.quantity}
              total={Number(x.quantity) * Number(x.price)}
              href={x.href}
              image={`pic${x.productID}.png`}
              updateLocal={updateLocal}
            />
          ))}
        </div>
      )}

      {total > 0 && (
        <div className="checkout_box">
          <Update updateLocal={updateLocal} />
          <Checkout total={total} checkout={checkout} />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Cart;
