import React from "react";
import { connect } from "react-redux";
import { decAction, incAction, resetAction } from "./store/actions";

function Counter(props) {
  console.log("Counter Loaded:", props);
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Counter:{props.count}</h1>
      <button
        onClick={() => {
          props.incFn();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.decFn();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          props.resetFn();
        }}
      >
        Reset
      </button>
    </div>
  );
}
function mapStateToProps(state) {
  return state.counterReducer;
}
function mapDispatchToProps(dispatch) {
  return {
    incFn: () => {
      dispatch(incAction());
    },
    decFn: () => {
      dispatch(decAction());
    },
    resetFn: () => {
      dispatch(resetAction());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
