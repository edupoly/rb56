import { useState } from "react";

function Counter() {
  var [c, fn] = useState(0);
  function inc() {
    fn(c + 1);
  } //action
  function dec() {
    // c=c-1
    fn(c - 1);
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
    </div>
  );
}
export default Counter;
// 1. state
// 2. actions
// 3. UI
