import React, { useState } from "react";
import AddButton from "../components/buttons/AddButton";
import RemoveButton from "../components/buttons/RemoveButton";
import Navbar from "../components/Navbar";
import image from "../assets/synth.png";

function Item2(props) {
  const title = "Product 2";
  const price = 15;
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
      <h2>Item 2 Page</h2>
      <img src={img} />
      <h3>{title}</h3>
      <p>{price}</p>
      <AddButton
        id="2"
        price={price}
        update={updateTime}
        title={title}
      ></AddButton>
      <RemoveButton
        id="2"
        price={price}
        update={updateTime}
        title={title}
      ></RemoveButton>
    </>
  );
}

export default Item2;
