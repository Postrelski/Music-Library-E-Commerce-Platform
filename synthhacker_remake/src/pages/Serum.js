import Product from "../components/Product";
import Navbar from "../components/Navbar";
import pic from "../assets/synth.png";
import "./styles/Serum.css";

function Serum() {
  const slides = [
    { title: "Product 1", price: 10, href: "/item", pic: pic, key: 1 },
    { title: "Product 2", price: 15, href: "/item2", pic: pic, key: 2 },
    { title: "Product 3", price: 5, href: "/item3", pic: pic, key: 3 },
  ];
  return (
    <>
      <Navbar />
      <div className="serumContainer">
        {slides.map((item) => (
          <Product
            className="product"
            title={item.title}
            key={item.key}
            price={item.price}
            href={item.href}
            pic={item.pic}
          />
        ))}
      </div>
    </>
  );
}

export default Serum;
