import React, { useState } from "react";
import NewItem from "./NewItem/NewItem";
import Items from "./Items/Items";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { text: "Finish homework", completed: true },
    { text: "Cook a dinner", completed: false },
    { text: "Fix the car", completed: true },
    { text: "Do the laundry", completed: false }
  ]);
  function addItem(value) {
    const newItems = [...items];
    newItems.push({ text: value, completed: false });
    setItems(newItems);
  }
  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  function toggleItem(index) {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  }
  return (
    <div className="App">
      <h1>TO DO</h1>
      <NewItem addItem={addItem} />
      <Items items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
    </div>
  );
}
export default App;
