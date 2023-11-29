function AddButton(props) {
  let products = [];

  // grab the array from local storage
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  function addItemHandler() {
    const searchItem = props.id;
    const foundObject = products.find((obj) => obj.productID === searchItem);

    if (foundObject) {
      // if object found, grab it quantity and add 1
      foundObject.quantity++;
    } else {
      // if object not found, then push it with a quantity of 1
      products.push({
        productID: props.id,
        id: props.id,
        title: props.title,
        quantity: 1,
        price: props.price,
        pic_url: props.pic_url,
      });
    }

    // push the array to local storage && refresh the component
    window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));
    window.location.reload();
  }

  return (
    <button className="add_remove addBTN" onClick={addItemHandler}>
      Add +1
    </button>
  );
}

export default AddButton;
