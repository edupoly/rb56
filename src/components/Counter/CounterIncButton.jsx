import React from "react";

function CounterIncButton(props) {
  return (
    <>
      <button
        onClick={() => {
          props.inc();
        }}
      >
        Inc
      </button>
    </>
  );
}

export default CounterIncButton;
