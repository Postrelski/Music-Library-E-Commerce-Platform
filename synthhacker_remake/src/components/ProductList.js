import Product from "./Product.js";
import "./ProductList.css";
import pic from "../assets/synth.png";
import { useState } from "react";

function ProductList(props) {
  const slides = [
    { title: "Product 1", price: 10, href: "/item", pic: { pic } },
    { title: "Product 2", price: 15, href: "/item2", pic: { pic } },
    { title: "Product 3", price: 5, href: "/item3", pic: { pic } },
  ];
  const [slide, setSlide] = useState(0);

  function slideHanlderRight() {
    if (slide + 1 == 2) {
      setSlide(0);
      dotHandlerLeft();
    } else {
      setSlide(slide + 1);
      dotHandlerRight();
    }
  }

  function slideHanlderLeft() {
    if (slide == 0) {
      setSlide(1);
      dotHandlerRight();
    } else {
      setSlide(slide - 1);
      dotHandlerLeft();
    }
  }

  const [dots, setDots] = useState("fas");
  const [dots2, setDots2] = useState("far");

  function dotHandlerLeft() {
    setSlide(0);
    setDots("fas");
    setDots2("far");
  }

  function dotHandlerRight() {
    setSlide(1);
    setDots("far");
    setDots2("fas");
  }

  return (
    <>
      <div className="items">
        <i
          className="arrow fa-solid fa-arrow-left"
          onClick={slideHanlderLeft}
        />
        <Product
          title={slides[slide].title}
          price={slides[slide].price}
          pic={pic}
          href={slides[slide].href}
        />

        <Product
          title={slides[slide + 1].title}
          price={slides[slide + 1].price}
          pic={pic}
          href={slides[slide + 1].href}
        />

        <i
          className="arrow fa-solid fa-arrow-right"
          onClick={slideHanlderRight}
        />
      </div>
      <div className="dots">
        <i className={`${dots} fa-dot-circle`} onClick={dotHandlerLeft} />
        <i className={`${dots2} fa-dot-circle`} onClick={dotHandlerRight} />
      </div>
    </>
  );
}
export default ProductList;

{
  /* <Product title="Product2" price="15" pic={pic} href="/item2" />
<Product title="Product3" price="5" pic={pic} href="/item3" /> */
}
