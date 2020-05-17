import React from "react";
import Item from "./Item/Item";
import "./Items.css";

function Items() {
  const items = [
    { text: "Finish homework", completed: true },
    { text: "Cook a dinner", completed: false },
    { text: "Fix the car", completed: true },
    { text: "Do the laundry", completed: false }
  ];
  const itemsOutput = items.map(item => (
    <Item completed={item.completed}>{item.text}</Item>
  ));
  return <ul className="Items">{itemsOutput}</ul>;
}

export default Items;
