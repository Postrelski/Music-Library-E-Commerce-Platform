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

    // update the quantity of the specific item
    foundObject.quantity = event.target.value;

    // update local storage
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
