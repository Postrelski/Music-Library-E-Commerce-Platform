import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LefftView from "../components/ItemPage/LeftView";
import MidView from "../components/ItemPage/MidView";
import RightView from "../components/ItemPage/RightView";

function Item2() {
  const title = "Product 2";
  const price = 15;

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
            <RightView id="2" price={price} update={updateTime} title={title} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Item2;
