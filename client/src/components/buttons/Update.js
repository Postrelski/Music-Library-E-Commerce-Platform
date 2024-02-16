import "./styles/Buttons.css";

function Update(props) {
  function updateHandler() {
    window.location.reload();
  }

  return (
    <button onClick={updateHandler} className="updateBTN">
      UPDATE CART
    </button>
  );
}

export default Update;
