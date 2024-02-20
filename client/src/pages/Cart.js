import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import Update from "../components/buttons/Update";
import Checkout from "../components/buttons/Checkout";
import ContinueShopping from "../components/buttons/ContinueShopping";
import "./styles/Cart.css";

function Cart() {
  // get the array from local storage
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // remove any 0 or negative values from products
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity <= 0) {
      // remove this guy
      console.log(products[i]);
      products = products.filter(function (el) {
        return el.id != products[i].id;
      });
    }
  }

  // update the local storage
  window.localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(products));

  // find the total number of products
  let total = 0;
  products.map((x) => (total += Number(x.quantity) * Number(x.price)));

  // wipe the cart clean
  function clearShoppingCart() {
    window.localStorage.clear();
  }

  // https://calm-caverns-34597-37cce735fe7d.herokuapp.com/cart

  // Call to backend Stripe API
  const checkout = async () => {
    await fetch(
      "https://calm-caverns-34597-37cce735fe7d.herokuapp.com:4000/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: products }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); //forwarding user to stripe
        }
      });
    clearShoppingCart();
  };

  return (
    <>
      <Navbar />
      {products.length == 0 && (
        <p className="empty_cart">Looks like your cart is empty!</p>
      )}
      {products.length == 0 && <ContinueShopping />}
      {products.length > 0 && (
        <div className="class_items_box">
          {products.map((x) => (
            <CartItems
              id={x.productID}
              key={x.productID}
              title={x.title}
              pic_url={x.pic_url}
              quantity={x.quantity}
              total={Number(x.quantity) * Number(x.price)}
              href={x.href}
              image={`pic${x.productID}.png`}
              price={x.price}
            />
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="checkout_box">
          <Update />
          <Checkout total={total} checkout={checkout} />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Cart;
