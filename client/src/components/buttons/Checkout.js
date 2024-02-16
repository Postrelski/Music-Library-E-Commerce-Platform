import "./styles/Checkout.css";

function Checkout(props) {
  return (
    <div>
      {" "}
      <div className="checkout_title">Subtotal ${props.total} USD</div>
      <button className="checkout_button" onClick={props.checkout}>
        CHECK OUT
      </button>
    </div>
  );
}

export default Checkout;
