import "./styles/Buttons.css";

function RemoveButton(props) {
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  function removeItemHandler() {
    const searchItem = props.id;
    const foundObject = products.find((obj) => obj.productID === searchItem);

    if (foundObject && foundObject.quantity > 0) {
      foundObject.quantity--;

      if (foundObject.quantity === 0) {
        products = products.filter(function (el) {
          return el.productID != props.id;
        });
      }

      props.update();
      window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
    }
  }

  return (
    <button className="add_remove removeBTN" onClick={removeItemHandler}>
      Remove
    </button>
  );
}

export default RemoveButton;
