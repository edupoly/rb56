import { useEffect } from "react";
import Counter from "./Counter";
import Products from "./Products";
import Todolist from "./Todolist";

function App() {
  useEffect(() => {
    console.log("App Component Loaded");
  }, []);
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Praveen</h1>
      <Todolist></Todolist>
      <Products></Products>
      <Counter></Counter>
    </div>
  );
}

export default App;
