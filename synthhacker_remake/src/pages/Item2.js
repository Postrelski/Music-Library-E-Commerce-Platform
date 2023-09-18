import React, { useState } from "react";
import Navbar from "../components/Navbar";
import image from "../assets/synth.png";

function Item2(props) {
  const amount = 15;
  const title = "product 2";
  const img = image;
  let products = [];

  const [cartNum, setCartNum] = useState(
    Number(window.localStorage.getItem("CART_NUM"))
  );

  const [product2Num, setProduct2Num] = useState(
    Number(window.localStorage.getItem("PRODUCT2_NUM"))
  );

  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  window.localStorage.setItem("PRODUCT2_NUM", JSON.stringify(product2Num));

  updateCart();

  // have the cart-item buttons trigger these functions
  function addItemHandler() {
    setProduct2Num(product2Num + 1);
    setCartNum(cartNum + 1);
    window.localStorage.setItem("CART_NUM", JSON.stringify(cartNum + 1));
    updateProduct();
  }

  function removeItemHandler() {
    if (
      cartNum > 0 &&
      Number(window.localStorage.getItem("PRODUCT2_NUM") > 0)
    ) {
      setCartNum(cartNum - 1);
      window.localStorage.setItem("CART_NUM", JSON.stringify(cartNum - 1));
      setProduct2Num(product2Num - 1);
      window.localStorage.setItem(
        "PRODUCT2_NUM",
        JSON.stringify(product2Num - 1)
      );
      removeProduct();
    }
  }

  function updateCart() {
    let cartTotal =
      Number(JSON.parse(localStorage.getItem("PRODUCT1_NUM"))) +
      Number(JSON.parse(localStorage.getItem("PRODUCT2_NUM"))) +
      Number(JSON.parse(localStorage.getItem("PRODUCT3_NUM")));
    window.localStorage.setItem("CART_NUM", JSON.stringify(cartTotal));
  }

  function updateProduct() {
    if (products.length == 0) {
      products.push({
        productID: 2,
      });
    } else {
      products.push({
        productID: 2,
      });
    }
    window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
  }

  function removeProduct() {
    for (let i = 0; i <= products.length; i++) {
      if (products[i].productID == 2) {
        products.splice(i, 1);
        window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
        break;
      }
    }
  }

  return (
    <>
      <Navbar cartTotal={cartNum} />
      <h2>Item Page</h2>
      <img src={img} />
      <h3>{title}</h3>
      <p>{amount}</p>
      <button onClick={addItemHandler}>Buy Me</button>
      <button onClick={removeItemHandler}>Remove Me</button>
    </>
  );
}

export default Item2;
