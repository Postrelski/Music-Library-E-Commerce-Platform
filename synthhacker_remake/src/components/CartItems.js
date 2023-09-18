import pic from "../assets/synth.png";
import "./CartItems.css";
import AddButton from "./buttons/AddButton";
import RemoveButton from "./buttons/RemoveButton";

function CartItems(props) {
  return (
    <div className="item_container">
      <a href={props.href}>
        <img src={pic}></img>
      </a>
      <p>Title: {props.title}</p>
      <p>quantity: {props.quantity}</p>
      <p>Total = ${props.quantity * props.price}</p>
      <AddButton
        id={props.id}
        localName={props.localName}
        update={props.onSetUpdate}
      ></AddButton>
      <RemoveButton
        id={props.id}
        localName={props.localName}
        update={props.onSetUpdate}
      ></RemoveButton>
    </div>
  );
}

export default CartItems;
