import React, { useEffect, useRef } from "react";

function Todolist() {
  let ref1 = useRef();
  let ref2 = useRef();
  useEffect(() => {
    // document.getElementById("d1").focus();
    ref1.current.focus();
  }, []);
  function checkEnter(ev) {
    if (ev.key == "Enter") {
      ref2.current.focus();
    }
  }
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h1>Todolist</h1>
      <input
        type="text"
        ref={ref1}
        onKeyUp={(event) => {
          checkEnter(event);
        }}
      />
      <br />
      <input type="text" ref={ref2} />
    </div>
  );
}

export default Todolist;
