import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
