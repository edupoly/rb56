import React from "react";

function CounterDecButton(props) {
  return (
    <>
      <button
        onClick={() => {
          props.dec();
        }}
      >
        Dec
      </button>
    </>
  );
}

export default CounterDecButton;
