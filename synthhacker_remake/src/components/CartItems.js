import "./styles/CartItems.css";
import AddButton from "./buttons/AddButton";
import RemoveButton from "./buttons/RemoveButton";

function CartItems(props) {
  const picVariable = `cart_images${props.id}`;

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
        <AddButton id={props.id} update={props.onSetUpdate}></AddButton>
        <RemoveButton id={props.id} update={props.onSetUpdate}></RemoveButton>
      </div>
    </div>
  );
}

export default CartItems;
