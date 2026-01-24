import React from "react";
import useCounter from "./hooks/useCounter";

function Counter(props) {
  var [count, inc, dec] = useCounter(props.iv, props.step);
  return (
    <div className="border border-2 p-2 m-2 border-info">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
