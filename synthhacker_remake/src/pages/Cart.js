import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";

function Cart() {
  // this is literally just to reload the page....
  const [update, setUpdate] = useState(true);
  function updateTime() {
    if (update == true) {
      setUpdate(false);
    } else {
      setUpdate(true);
    }
  }

  let products = [];
  // const product1_price = 10;
  // const product2_price = 15;

  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // for (let i = 0; i < products.length; i++) {
  //   if (products[i].productID == 1) {
  //     product1_quantity++;
  //   }
  //   if (products[i].productID == 2) {
  //     product2_quantity++;
  //   }
  // }

  // const total = 5;
  //   product1_price * product1_quantity + product2_price * product2_quantity;

  return (
    <>
      <Navbar />

      {/* {product1_quantity ? (
        <CartItems
          href="Item"
          title="Product 1"
          quantity={product1_quantity}
          price={product1_price}
          id="1"
          onSetUpdate={updateTime}
        />
      ) : (
        <p></p>
      )}

      {product2_quantity ? (
        <CartItems
          href="Item2"
          title="Product 2"
          id="2"
          quantity={product2_quantity}
          price={product2_price}
          onSetUpdate={updateTime}
        />
      ) : (
        <p></p>
      )} */}

      <div className="checkout_box">
        <div>Subtotal $ USD</div>
        <button>CHECK OUT</button>
      </div>
    </>
  );
}

export default Cart;
