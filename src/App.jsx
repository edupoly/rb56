import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Praveen</h1>
      <Link to="/counter">Counter</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/lscs">LSCS</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/recipes">Recipes</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
