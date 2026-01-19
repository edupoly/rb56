import React, { useState } from "react";

function Todolist() {
  var [todos, setTodos] = useState([
    "goto goa",
    "paybills",
    "edo video",
    "todo5",
    "inko todo",
    "kotha todo",
  ]);
  function addTodo() {
    var x = document.getElementById("d1").value;
    // setTodos([...todos, x]);
    setTodos(function (ctodos) {
      return [...ctodos, x];
    });
  }
  function deleteTodo(ind) {
    // var temp = [...todos];
    // temp.splice(ind, 1);
    // setTodos([...temp]);
    setTodos((ctodos) => {
      return ctodos.filter((todo, i) => {
        return i == ind ? false : true;
      });
    });
  }
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h2>Todolist</h2>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
// 1. state
// 2. action
// 3. UI
