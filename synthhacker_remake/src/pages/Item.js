import React, { useState } from "react";
import Navbar from "../components/Navbar";
import image from "../assets/synth.png";

function Item(props) {
  const amount = 10;
  const title = "product 1";
  const img = image;
  let products = [];

  const [product1Num, setProduct1Num] = useState(
    Number(window.localStorage.getItem("PRODUCT1_NUM"))
  );

  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  window.localStorage.setItem("PRODUCT1_NUM", JSON.stringify(product1Num));

  function addItemHandler() {
    setProduct1Num(product1Num + 1);
    updateProduct();
  }

  function removeItemHandler() {
    if (
      products.length > 0 &&
      Number(window.localStorage.getItem("PRODUCT1_NUM") > 0)
    ) {
      setProduct1Num(product1Num - 1);
      window.localStorage.setItem(
        "PRODUCT1_NUM",
        JSON.stringify(product1Num - 1)
      );
      removeProduct();
    }
  }

  function updateProduct() {
    if (products.length == 0) {
      products.push({
        productID: 1,
      });
    } else {
      products.push({
        productID: 1,
      });
    }
    window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
  }

  function removeProduct() {
    for (let i = 0; i <= products.length; i++) {
      if (products[i].productID == 1) {
        products.splice(i, 1);
        window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
        break;
      }
    }
  }

  return (
    <>
      <Navbar />
      <h2>Item Page</h2>
      <img src={img} />
      <h3>{title}</h3>
      <p>{amount}</p>
      <button onClick={addItemHandler}>Buy Me</button>
      <button onClick={removeItemHandler}>Remove Me</button>
    </>
  );
}

export default Item;
