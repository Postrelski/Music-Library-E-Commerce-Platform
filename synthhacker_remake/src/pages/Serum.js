import Product from "../components/Product";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Serum.css";
import data from "../data.json";

function Serum() {
  return (
    <>
      <Navbar />
      <div className="serumContainer">
        {data.map((item) => (
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
