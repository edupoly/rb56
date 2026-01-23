import React from "react";
import Child2 from "./Child2";

function Child1() {
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Child1</h1>
      <Child2></Child2>
    </div>
  );
}

export default Child1;
