import React from "react";
import Item from "./Item/Item";
import "./Items.css";

function Items() {
  return (
    <ul className="Items">
      <Item completed>Finish homework</Item>
      <Item completed>Cook a dinner</Item>
      <Item>Fix the car</Item>
    </ul>
  );
}

export default Items;
