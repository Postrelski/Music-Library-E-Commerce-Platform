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
        <p className="align top_title">{props.title}</p>
        <p className="align">AMOUNT: {props.quantity}</p>
        <p className="align">PRICE: ${props.total}</p>
      </div>

      <div className="buttons_container">
        <Quantity
          href={props.href}
          id={props.id}
          pic_url={props.pic_url}
          price={props.price}
          productID={props.id}
          quantity={props.quantity}
          title={props.title}
        />
        <Delete id={props.id} />
      </div>
    </div>
  );
}

export default CartItems;

{
  /* <CartItems
              id={x.productID}
              key={x.productID}
              title={x.title}
              pic_url={x.pic_url}
              quantity={x.quantity}
              total={Number(x.quantity) * Number(x.price)}
              href={x.href}
              image={`pic${x.productID}.png`}
            /> */
}
