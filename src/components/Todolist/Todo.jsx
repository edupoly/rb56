import React, { useEffect } from "react";

function Todo(props) {
  useEffect(() => {
    console.log(props.todo, "Todo rendered");
  });
  return (
    <li className="border border-2 p-2 m-2 border-info">
      {props.todo}
      <button
        onClick={() => {
          props.deleteTodo(props.i);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default React.memo(Todo);
