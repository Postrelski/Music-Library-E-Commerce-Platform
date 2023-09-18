function RemoveButton(props) {
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  let quantity = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].productID == props.id) {
      quantity++;
    }
  }

  function removeItemHandler() {
    if (quantity > 0) {
      removeProduct();
      props.update();
    }
  }

  function removeProduct() {
    for (let i = 0; i <= products.length; i++) {
      if (products[i].productID == props.id) {
        products.splice(i, 1);
        window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
        break;
      }
    }
  }

  return <button onClick={removeItemHandler}>Remove Me</button>;
}

export default RemoveButton;
