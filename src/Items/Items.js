import React from "react";
import Item from "./Item/Item";
import "./Items.css";

function Items(props) {
  const itemsOutput = props.items.map(item => (
    <Item completed={item.completed}>{item.text}</Item>
  ));
  return <ul className="Items">{itemsOutput}</ul>;
}

export default Items;
