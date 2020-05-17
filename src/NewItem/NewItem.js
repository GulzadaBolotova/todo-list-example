import React from "react";
import "./NewItem.css";

function NewItem() {
  return (
    <div className="NewItem">
      <input type="text" placeholder="Ex: Finish homework" />
      <button>Add</button>
    </div>
  );
}

export default NewItem;
