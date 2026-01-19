import React, { useReducer } from "react";
import { counterReducer, initialCount } from "./counterReducer";
//reducer function is to maintain the logic
function Counter() {
  let [state, dispatch] = useReducer(counterReducer, initialCount);
  return (
    <div className="border border-2 p-2 m-2 border-info">
      <h1 className="">Counter:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        Dec
      </button>
    </div>
  );
}

export default Counter;
//state
//logic
//ui
//abstraction//encapsulation//with out class
