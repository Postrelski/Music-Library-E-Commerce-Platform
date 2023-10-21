import Product from "../components/Product";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Serum.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

function Serum() {
  const slides = [
    { title: "Product 1", price: 10, href: "/item1", pic: pic1, key: 1 },
    { title: "Product 2", price: 15, href: "/item2", pic: pic2, key: 2 },
    { title: "Product 3", price: 5, href: "/item3", pic: pic3, key: 3 },
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
      <Footer />
    </>
  );
}

export default Serum;
