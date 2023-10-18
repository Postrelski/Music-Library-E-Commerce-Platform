import pic from "../assets/synth.png";
import "./CartItems.css";
import AddButton from "./buttons/AddButton";
import RemoveButton from "./buttons/RemoveButton";

function CartItems(props) {
  return (
    <div className="item_container">
      <a href={props.href}>
        {/* <img src={pic}></img> */}
        <div className="cart_images"></div>
      </a>
      <p className="align">Title: {props.title}</p>
      <p className="align">quantity: {props.quantity}</p>
      <p className="align">Total = ${props.total}</p>
      <AddButton id={props.id} update={props.onSetUpdate}></AddButton>
      <RemoveButton id={props.id} update={props.onSetUpdate}></RemoveButton>
    </div>
  );
}

export default CartItems;
