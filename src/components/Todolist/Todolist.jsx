import React, { useCallback, useEffect, useState, useMemo } from "react";
import Todo from "./Todo";

function Todolist() {
  useEffect(() => {
    console.log("Hello Todolist Mounted");
  }, []);
  useEffect(() => {
    console.log("Todolist rendered");
  });
  var [todos, setTodos] = useState([
    "goto goa",
    "paybills",
    "edo video",
    "todo5",
    "inko todo",
    "kotha todo",
  ]);

  var addTodo = useCallback(function () {
    var x = document.getElementById("d1").value;
    setTodos(function (ctodos) {
      return [...ctodos, x];
    });
  }, []);
  var deleteTodo = useCallback(function (ind) {
    setTodos((ctodos) => {
      return ctodos.filter((todo, i) => {
        return i == ind ? false : true;
      });
    });
  }, []);
  var ar = useMemo(() => {
    return [10, 20, 30, 12, 34];
  }, []);
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
            <Todo todo={todo} i={i} deleteTodo={deleteTodo} ar={ar}></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(Todolist);
// React.memo HOC
// useCallback hook
// useMemo

// useState
// useReducer
// useEffect
// useCallback
// useMemo
// useRef
