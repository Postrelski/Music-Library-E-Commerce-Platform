import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
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

  return (
    <>
      <Navbar />

      <div className="class_items_box">
        {/* <span className="quantity">QUANTITY</span> */}
        {/* <span className="total">TOTAL</span> */}

        {products.map((x) => (
          <CartItems
            id={x.productID}
            key={x.productID}
            title={x.title}
            quantity={x.quantity}
            total={Number(x.quantity) * Number(x.price)}
            onSetUpdate={updateTime}
            href={`/item${x.productID}`}
          />
        ))}
      </div>

      <div className="checkout_box">
        <div>Subtotal ${total} USD</div>
        <button className="checkout_button">CHECK OUT</button>
      </div>
    </>
  );
}

export default Cart;
