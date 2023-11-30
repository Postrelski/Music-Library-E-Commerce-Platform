import Quantity from "../buttons/Quantity";
import AddToCart from "../buttons/AddToCart";
import AddButton from "../buttons/AddButton";
import Update from "../buttons/Update";
import "./styles/RightView.css";

function RightView(props) {
  return (
    <div className="right_view_container">
      <hr className="product_line"></hr>
      <p className="title">{props.title}</p>
      <p className="price">${props.price} USD</p>
      <AddButton
        id={props.id}
        price={props.price}
        update={props.update}
        title={props.title}
        pic_url={props.pic_url}
        href={props.href}
      />
    </div>
  );
}

export default RightView;
