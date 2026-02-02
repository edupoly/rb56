import React, { useState } from "react";
import { connect } from "react-redux";

function Todolist(props) {
  let [ntd, setNewTodo] = useState("");
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.dispatch({ type: "ADDTODO", payload: ntd });
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todoReducer.todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect((store) => store)(Todolist);
