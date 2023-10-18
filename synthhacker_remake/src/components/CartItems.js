import "./CartItems.css";
import AddButton from "./buttons/AddButton";
import RemoveButton from "./buttons/RemoveButton";

function CartItems(props) {
  return (
    <div className="item_container">
      <div className="cart_fold">
        <a href={props.href}>
          <div className="cart_images"></div>
        </a>
        <p className="align">{props.title}</p>
        <p className="align">AMOUNT: {props.quantity}</p>
        <p className="align">PRICE: ${props.total}</p>
      </div>

      <AddButton id={props.id} update={props.onSetUpdate}></AddButton>
      <RemoveButton id={props.id} update={props.onSetUpdate}></RemoveButton>
    </div>
  );
}

export default CartItems;
