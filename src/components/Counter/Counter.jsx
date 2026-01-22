import { useState } from "react";
import CounterIncButton from "./CounterIncButton";
import CounterDecButton from "./CounterDecButton";

function Counter() {
  var [c, fn] = useState(0);
  function inc() {
    fn(c + 1);
  }
  function dec() {
    fn(c - 1);
  }
  return (
    <div className="border border-5 border-info p-2 m-2">
      <h1>Count:{c}</h1>
      <CounterIncButton inc={inc}></CounterIncButton>
      <CounterDecButton dec={dec}></CounterDecButton>
    </div>
  );
}
export default Counter;
