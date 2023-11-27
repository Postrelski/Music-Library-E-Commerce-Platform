import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Cancel.css";

function Cancel() {
  return (
    <>
      <Navbar />
      <h2 className="cancel">Order did not work.</h2>
      <Footer />
    </>
  );
}

export default Cancel;
