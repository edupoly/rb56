import { useState } from "react";
import Todolist from "./components/Todolist/Todolist";
import Products from "./components/products/Products";

function App() {
  var [s, setS] = useState(45);
  function inc() {
    setS(s + 4);
  }
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Praveen {s}</h1>
      <Products></Products>
      <button
        onClick={() => {
          inc();
        }}
      >
        inc
      </button>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
