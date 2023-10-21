import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LefftView from "../components/ItemPage/LeftView";
import MidView from "../components/ItemPage/MidView";
import RightView from "../components/ItemPage/RightView";
import Footer from "../components/Footer";
import pic from "../assets/pic3.png";

function Item3() {
  const title = "Product 3";
  const price = 5;

  // this is literally just to reload the page....
  const [update, setUpdate] = useState(true);
  function updateTime() {
    setUpdate(!update);
  }
  return (
    <>
      <Navbar />
      <div className="item_page_container">
        <div className="arrows_container">
          <a href="/item2">
            <i class="fa-solid fa-arrow-left"></i>
            <span> Previous Item</span>
          </a>

          {/* <a>
            <span>Next Item </span>
            <i class="fa-solid fa-arrow-right"></i>
          </a> */}
        </div>
        <div className="itemsMidSection">
          <LefftView />
          <div className="image_buttons_pair">
            <MidView image={pic} />
            <RightView id="3" price={price} update={updateTime} title={title} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Item3;
