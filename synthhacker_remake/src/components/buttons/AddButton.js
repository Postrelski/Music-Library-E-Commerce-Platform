function AddButton(props) {
  let products = [];

  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  function addItemHandler() {
    products.push({
      productID: props.id,
    });
    props.update();
    window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
  }

  return <button onClick={addItemHandler}>Add Me</button>;
}

export default AddButton;
