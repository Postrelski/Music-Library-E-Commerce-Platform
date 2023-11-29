import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LefftView from "../components/ItemPage/LeftView";
import MidView from "../components/ItemPage/MidView";
import RightView from "../components/ItemPage/RightView";
import Footer from "../components/Footer";
import "./styles/Item.css";
import data from "../data.json";

function Item() {
  const pID = data[0].id;
  const title = data[0].title;
  const price = data[0].price;
  const pic = data[0].pic;
  const pic_url = data[0].pic_url;
  const href = data[0].href;

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
            <RightView
              id={pID}
              price={price}
              title={title}
              pic_url={pic_url}
              href={href}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Item;
