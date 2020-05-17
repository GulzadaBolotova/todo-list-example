import React from "react";
import "./Item.css";

function Item() {
  return (
    <li className="completed">
      <span>Finish homework</span>
      <button>x</button>
    </li>
  );
}
export default Item;
