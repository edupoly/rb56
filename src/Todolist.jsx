import React, { useState } from "react";
import { connect } from "react-redux";

function Todolist(props) {
  console.log("Todolist Loaded:", props);
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
          props.abc(ntd);
          // props.dispatch({ type: "ADDTODO", payload: ntd });
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return state.todoReducer;
}
function mapDispatchToProps(dispatch) {
  return {
    abc: function (nt) {
      dispatch({ type: "ADDTODO", payload: nt });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
