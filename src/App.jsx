import React from "react";
import Counter from "./Counter";
function App() {
  var [x, setX] = React.useState("");
  function abc(arg) {
    alert("call indroy");
    setX(arg);
  }
  return (
    <div className="border border-5 border-danger p-2 m-2">
      <h1>Hyderabad : {x}</h1>
      <Counter v={100} s={10} ar={[11, 22]} abc={abc}></Counter>
      <h1>Delhi</h1>
      <Counter v={200} s={20}>
        Katrina
      </Counter>
    </div>
  );
}

export default App;
