function RemoveButton(props) {
  function print() {
    console.log("Inside of RemoveButton.js, id = ", props.id);
  }

  return <button onClick={print}>Remove Me</button>;
}

export default RemoveButton;
