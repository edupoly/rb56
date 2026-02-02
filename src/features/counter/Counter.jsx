import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "./counterSlice";

function Counter() {
  var x = useSelector((state) => state.counter);
  var dispatch = useDispatch();
  console.log(x);
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Counter:{x.count}</h1>
      <button
        onClick={() => {
          dispatch(inc());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(dec());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
