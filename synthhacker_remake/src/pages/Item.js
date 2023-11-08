import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LefftView from "../components/ItemPage/LeftView";
import MidView from "../components/ItemPage/MidView";
import RightView from "../components/ItemPage/RightView";
import Footer from "../components/Footer";
import "./styles/Item.css";
import data from "../data.json";

function Item() {
  const title = data[0].title;
  const price = data[0].price;
  const pic = data[0].pic;

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
          <a></a>
          <a href="/item2">
            <span>Next Item </span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="itemsMidSection">
          <LefftView />
          <div className="image_buttons_pair">
            <MidView image={pic} />
            <RightView id="1" price={price} update={updateTime} title={title} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Item;
