import React, { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "ADDTODO") {
    return { todos: [...state.todos, action.payload] };
  }
  if (action.type === "DELETETODO") {
    state.todos.splice(action.payload, 1);
    return { todos: [...state.todos] };
  }
  return state;
}
function Todolist() {
  const [state, dispatch] = useReducer(reducer, {
    todos: ["get a home", "goto goa", "pay bills"],
  });
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          dispatch({
            type: "ADDTODO",
            payload: document.getElementById("d1").value,
          });
        }}
      >
        Add Todo
      </button>
      <ul>
        {state.todos.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  dispatch({ type: "DELETETODO", payload: i });
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
