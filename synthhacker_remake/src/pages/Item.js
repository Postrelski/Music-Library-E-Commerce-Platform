import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LefftView from "../components/ItemPage/LeftView";
import MidView from "../components/ItemPage/MidView";
import RightView from "../components/ItemPage/RightView";
import "./styles/Item.css";

function Item() {
  const title = "Product 1";
  const price = 10;

  // this is literally just to reload the page....
  const [update, setUpdate] = useState(true);
  function updateTime() {
    setUpdate(!update);
  }

  return (
    <>
      <Navbar />
      <div className="item_page_container">
        <div className="itemsMidSection">
          <LefftView />
          <div className="image_buttons_pair">
            <MidView />
            <RightView id="1" price={price} update={updateTime} title={title} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
