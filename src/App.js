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

  return (
    <div className="App">
      <NewItem />
      <Items items={items} />
    </div>
  );
}
export default App;
