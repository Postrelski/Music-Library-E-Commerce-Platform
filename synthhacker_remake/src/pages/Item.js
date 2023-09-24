import React, { useState } from "react";
import Navbar from "../components/Navbar";
import image from "../assets/synth.png";
import AddButton from "../components/buttons/AddButton";
import RemoveButton from "../components/buttons/RemoveButton";

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
      <h2>Item Page</h2>
      <img src={img} />
      <h3>{title}</h3>
      <p>{price}</p>
      <AddButton
        id="1"
        price={price}
        update={updateTime}
        title={title}
      ></AddButton>
      <RemoveButton
        id="1"
        price={price}
        update={updateTime}
        title={title}
      ></RemoveButton>
    </>
  );
}

export default Item;
