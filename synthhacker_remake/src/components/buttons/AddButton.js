import React, { useState } from "react";

function AddButton(props) {
  let products = [];

  const [productNum, setProductNum] = useState(
    Number(window.localStorage.getItem(props.localName))
  );

  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  window.localStorage.setItem(props.localName, JSON.stringify(productNum));

  function addItemHandler() {
    setProductNum(productNum + 1);
    updateProduct();
    props.update();
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
