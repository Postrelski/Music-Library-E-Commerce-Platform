import "./styles/Quantity.css";
import { useState } from "react";

function Quantity(props) {
  const [num, setNum] = useState(props.quantity);

  function quantityOnChangeHandler(event) {
    //  prevent reload
    event.preventDefault();

    // update state for input value
    setNum(event.target.value);

    // get the local storage
    let products = [];
    if (localStorage.getItem("PRODUCT_ARRAY")) {
      products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
    }

    // find the item in array with the specific ID
    let searchItem = event.target.id;
    let foundObject = products.find((obj) => obj.productID === searchItem);

    // if "UPDATE CART" is pressed trigger this?
    if (foundObject) {
      foundObject.quantity = event.target.value;
      // if value is 0 or less, remove it
      if (foundObject.quantity <= 0) {
        products = products.filter(function (el) {
          return el.productID != props.id;
        });
      }
    } else {
      // if not found push it to the array, value must be positive
      products.push({
        productID: props.id,
        id: props.id,
        title: props.title,
        quantity: event.target.value,
        price: props.price,
        pic_url: props.pic_url,
        href: props.href,
      });
    }
    window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
  }

  return (
    <form className="quantity_form">
      <span>Quantity: </span>
      <input
        onChange={quantityOnChangeHandler}
        type="number"
        id={props.id}
        name="quantity"
        min="1"
        max="99"
        value={num}
      />
    </form>
  );
}

export default Quantity;
