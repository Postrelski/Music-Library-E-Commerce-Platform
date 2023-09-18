import React, { useState } from "react";

function AddButton(props) {
  let products = [];

  // const [cartNum, setCartNum] = useState(
  //   Number(window.localStorage.getItem("CART_NUM"))
  // );

  const [productNum, setProductNum] = useState(
    Number(window.localStorage.getItem(props.localName))
  );

  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  window.localStorage.setItem(props.localName, JSON.stringify(productNum));
  // updateCart();

  // have the cart-item buttons trigger these functions
  function addItemHandler() {
    setProductNum(productNum + 1);
    // setCartNum(cartNum + 1);
    // window.localStorage.setItem("CART_NUM", JSON.stringify(cartNum + 1));
    updateProduct();
    props.update();
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
        productID: props.id,
      });
    } else {
      products.push({
        productID: props.id,
      });
    }
    window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
  }

  return <button onClick={addItemHandler}>Add Me</button>;
}

export default AddButton;
