import "./styles/CartItems.css";
import Delete from "./buttons/Delete";
import Quantity from "./buttons/Quantity";

function CartItems(props) {
  // grab the CSS class name form the JSON file
  const picVariable = props.pic_url;

  return (
    <div className="item_container">
      <div className="cart_fold">
        <a href={props.href}>
          <div className={picVariable}></div>
        </a>
        <p className="align">{props.title}</p>
        <p className="align">AMOUNT: {props.quantity}</p>
        <p className="align">PRICE: ${props.total}</p>
      </div>

      <div className="buttons_container">
        <Quantity id={props.id} updateLocal={props.updateLocal} />
        <Delete id={props.id} />
      </div>
    </div>
  );
}

export default CartItems;
