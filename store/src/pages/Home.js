import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <p className="home_title">SERUM</p>
      <ProductList />
      <Footer />
    </>
  );
}

export default Home;
