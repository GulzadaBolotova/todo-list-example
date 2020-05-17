import React, { useState } from "react";
import "./NewItem.css";

function NewItem(props) {
  const [value, setValue] = useState("");
  function inputChange(event) {
    setValue(event.target.value);
  }
  function addItem() {
    if (value.length >= 3) {
      setValue("");
      props.addItem(value);
    }
  }
  return (
    <div className="NewItem">
      <input
        type="text"
        placeholder="Ex: Finish homework"
        onChange={inputChange}
        value={value}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default NewItem;
