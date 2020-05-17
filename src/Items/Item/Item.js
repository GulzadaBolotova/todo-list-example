import React from "react";
import "./Item.css";

function Item(props) {
  const classes = ["Item"];
  if (props.completed) {
    classes.push("completed");
  }
  return (
    <li className={classes.join(" ")}>
      <span onClick={props.toggleItem}>{props.children}</span>
      <button onClick={props.deleteItem}>x</button>
    </li>
  );
}
export default Item;
