import React, { useContext } from "react";
import Child3 from "./Child3";
import MyContext from "./MyContext";

function Child2() {
  var a = useContext(MyContext);
  console.log(a);
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h1>Child2 : {a}</h1>
      <Child3></Child3>
    </div>
  );
}

export default Child2;
