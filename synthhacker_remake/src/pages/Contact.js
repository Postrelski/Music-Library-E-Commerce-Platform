import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact_container">
        <h2>Contact Page</h2>
        <p>Want to get in touch?</p>
        <p>email me at: matthewpostrel5@gmail.com</p>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
