import "./CartItems.css";
import AddButton from "./buttons/AddButton";
import RemoveButton from "./buttons/RemoveButton";

function CartItems(props) {
  // Kind of ghetto solution but works for now
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

      <AddButton id={props.id} update={props.onSetUpdate}></AddButton>
      <RemoveButton id={props.id} update={props.onSetUpdate}></RemoveButton>
    </div>
  );
}

export default CartItems;
