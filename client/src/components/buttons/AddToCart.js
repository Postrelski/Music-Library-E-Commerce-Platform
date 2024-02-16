import "./styles/Buttons.css";

// this function will either add 1 or more to the items quantity

function AddToCart() {
  function addToCartHandler() {
    console.log("add item to cart");
    window.location.reload();
  }

  return (
    <button className="addToCarBTN" onClick={addToCartHandler}>
      Add To Cart
    </button>
  );
}

export default AddToCart;
