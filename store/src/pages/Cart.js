import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import "./styles/Cart.css";

function Cart() {
  // this is literally just to reload the page....
  const [update, setUpdate] = useState(true);
  function updateTime() {
    setUpdate(!update);
  }

  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  let total = 0;
  products.map((x) => (total += Number(x.quantity) * Number(x.price)));

  // wipe the cart clean
  function clear() {
    window.localStorage.clear();
  }

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
    // now clear the cart
    clear();
  };

  return (
    <>
      <Navbar />

      <div className="class_items_box">
        {products.map((x) => (
          <CartItems
            id={x.productID}
            key={x.productID}
            title={x.title}
            pic_url={x.pic_url}
            quantity={x.quantity}
            total={Number(x.quantity) * Number(x.price)}
            onSetUpdate={updateTime}
            href={`/item${x.productID}`}
            image={`pic${x.productID}.png`}
          />
        ))}
      </div>

      <div className="checkout_box">
        <div>Subtotal ${total} USD</div>
        <button className="checkout_button" onClick={checkout}>
          CHECK OUT
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
