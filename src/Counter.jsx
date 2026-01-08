import { useState } from "react";

function Counter(props) {
  console.log(props);
  var [c, fn] = useState(props.v);
  function inc() {
    fn(c + props.s);
  } //action
  function dec() {
    // c=c-1
    fn(c - props.s);
  }
  return (
    <div className="border border-5 border-info p-2 m-2">
      {/* UI */}
      <h1>Count:{c}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
          props.abc(890);
        }}
      >
        Parent lo unna abcfunc call chey
      </button>
    </div>
  );
}
export default Counter;
// 1. state
// 2. actions
// 3. UI
