import "./styles/Quantity.css";

function Quantity(props) {
  function quantityOnChangeHandler(event) {
    //  prevent reload
    event.preventDefault();
    // this is the new quantity amount
    console.log(event.target.value);
    // update the local storage quantity that matches this ID
    console.log(event.target.id);

    // get the local storage
    let products = [];
    if (localStorage.getItem("PRODUCT_ARRAY")) {
      products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
    }

    // find the item in array with the specific ID
    let searchItem = event.target.id;
    let foundObject = products.find((obj) => obj.productID === searchItem);

    // if "UPDATE CART" is pressed trigger this function
    // props.updateLocal();
    // if (props.updateLocal()) {
    //   updateTheThing(foundObject, products, event);
    // }
    updateTheThing(foundObject, products, event);
  }

  function updateTheThing(foundObject, products, event) {
    console.log("update the thing");
    console.log(foundObject);

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
        // value={val}
      />
    </form>
  );
}

export default Quantity;
