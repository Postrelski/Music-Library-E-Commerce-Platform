import React, { useState } from "react";
import Navbar from "../components/Navbar";
import image from "../assets/synth.png";
import LefftView from "../components/ItemPage/LeftView";
import MidView from "../components/ItemPage/MidView";
import RightView from "../components/ItemPage/RightView";
import "./styles/Item.css";

function Item(props) {
  const title = "Product 1";
  const price = 10;
  const img = image;

  // this is literally just to reload the page....
  const [update, setUpdate] = useState(true);
  function updateTime() {
    if (update == true) {
      setUpdate(false);
    } else {
      setUpdate(true);
    }
  }

  return (
    <>
      <Navbar />
      <div className="itemsMidSection">
        <LefftView />
        <MidView />
        <RightView id="1" price={price} update={updateTime} title={title} />
      </div>
    </>
  );
}

export default Item;
