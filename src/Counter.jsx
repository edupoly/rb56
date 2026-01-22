import React, { useEffect, useState } from "react";

function Counter() {
  useEffect(() => {
    console.log("Counter Component Loaded");
  }, []);

  useEffect(() => {
    console.log("Counter lo edo jarigindi");
  }, []);

  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
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
