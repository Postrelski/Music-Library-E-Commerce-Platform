import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import "./styles/Cart.css";

function Cart() {
  // reload componenet if ADD / Remove is clicked....
  const [update, setUpdate] = useState(true);
  function updateTime() {
    setUpdate(!update);
  }

  // get the array from local storage
  let products = [];
  if (localStorage.getItem("PRODUCT_ARRAY")) {
    products = JSON.parse(localStorage.getItem("PRODUCT_ARRAY"));
  }

  // find the total number of products
  let total = 0;
  products.map((x) => (total += Number(x.quantity) * Number(x.price)));

  // wipe the cart clean
  function clear() {
    window.localStorage.clear();
  }

  // Call to backend Stripe API
  const checkout = async () => {
    if (total >= 1) {
      await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: products }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response.url) {
            window.location.assign(response.url); //forwarding user to stripe
            clear();
          }
        });
    } else {
      alert("cart is empty!");
    }
  };

  return (
    <>
      <Navbar />
      {total == 0 && (
        <p className="empty_cart">Looks like your cart is empty!</p>
      )}
      {total > 0 && (
        <div className="class_items_box">
          {products.map((x) => (
            <CartItems
              id={x.productID}
              key={x.productID}
              title={x.title}
              pic_url={x.pic_url}
              quantity={x.quantity}
              total={Number(x.quantity) * Number(x.price)}
              onSetUpdate={updateTime}
              href={`/item${x.productID}`}
              image={`pic${x.productID}.png`}
            />
          ))}
        </div>
      )}
      {/* this could be a serparate component? */}
      <div className="checkout_box">
        <div>Subtotal ${total} USD</div>
        <button className="checkout_button" onClick={checkout}>
          CHECK OUT
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
