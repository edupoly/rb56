import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log(props);
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Counter:{props.counterReducer.count}</h1>
      <button
        onClick={() => {
          props.dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "DEC" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default connect((store) => {
  return store;
})(Counter);
