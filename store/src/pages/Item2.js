import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LefftView from "../components/ItemPage/LeftView";
import MidView from "../components/ItemPage/MidView";
import RightView from "../components/ItemPage/RightView";
import Footer from "../components/Footer";
import data from "../data.json";

function Item2() {
  const pID = data[1].id;
  const title = data[1].title;
  const price = data[1].price;
  const pic = data[1].pic;
  const pic_url = data[1].pic_url;

  // reload componenet if ADD / Remove is clicked....
  const [update, setUpdate] = useState(true);
  function updateTime() {
    setUpdate(!update);
  }

  return (
    <>
      <Navbar />
      <div className="item_page_container">
        <div className="arrows_container">
          <a href="/item1">
            <i class="fa-solid fa-arrow-left"></i>
            <span> Previous Item</span>
          </a>
          <a href="/item3">
            <span>Next Item </span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="itemsMidSection">
          <LefftView />
          <div className="image_buttons_pair">
            <MidView image={pic} />
            <RightView
              id={pID}
              price={price}
              update={updateTime}
              title={title}
              pic_url={pic_url}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Item2;
