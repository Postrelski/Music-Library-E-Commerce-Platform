import Product from "./Product.js";
import "./ProductList.css";
import pic from "../assets/synth.png";

function ProductList(props) {
  return (
    <div className="items">
      <Product title="Product1" price="10" pic={pic} href="/item" />
      <Product title="Product2" price="15" pic={pic} href="/item2" />
    </div>
  );
}
export default ProductList;
