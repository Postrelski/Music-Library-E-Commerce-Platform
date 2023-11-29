function Checkout(props) {
  return (
    <div>
      {" "}
      <div>Subtotal ${props.total} USD</div>
      <button className="checkout_button" onClick={props.checkout}>
        CHECK OUT
      </button>
    </div>
  );
}

export default Checkout;
