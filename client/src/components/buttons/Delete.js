import "./styles/Delete.css";

function Delete(props) {
  // Take array from local storage
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // find the element with the matching ID and filter it
  function removeALL() {
    products = products.filter(function (el) {
      return el.productID != props.id;
    });

    window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
    // reload page
    window.location.reload();
  }
  return (
    <button className="deleteBTN" onClick={removeALL}>
      X
    </button>
  );
}

export default Delete;
