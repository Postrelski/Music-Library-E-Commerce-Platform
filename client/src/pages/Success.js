import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Success.css";

function Success() {
  // wipe the cart clean
  function clearShoppingCart() {
    window.localStorage.clear();
  }

  clearShoppingCart();

  return (
    <>
      <Navbar />
      <h2 className="success">
        Order complete! Your download links will be arriving shortly.
      </h2>
      <Footer />
    </>
  );
}

export default Success;
