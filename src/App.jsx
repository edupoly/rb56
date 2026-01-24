import Counter from "./Counter";

function App() {
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Praveen</h1>
      <Counter iv={10} step={5}></Counter>
      <Counter iv={20} step={10}></Counter>
    </div>
  );
}

export default App;
