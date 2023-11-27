import AddButton from "../buttons/AddButton";
import RemoveButton from "../buttons/RemoveButton";
import "./RightView.css";

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
      />
      <RemoveButton
        id={props.id}
        price={props.price}
        update={props.update}
        title={props.title}
      />
    </div>
  );
}

export default RightView;

// id = "1";
// price = { price };
// update = { updateTime };
// title = { title };
