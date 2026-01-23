import Child1 from "./Child1";
import MyContext from "./MyContext";
function App() {
  var x = 100;
  return (
    <MyContext.Provider value={x}>
      <div className="border border-2 p-2 m-2 border-info">
        <h1>Praveen</h1>
        <Child1></Child1>
      </div>
    </MyContext.Provider>
  );
}

export default App;
