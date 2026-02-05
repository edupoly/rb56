import React from "react";
import {
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
} from "../../services/todos";
import { Link } from "react-router-dom";

function Todolist() {
  var { isLoading, data } = useGetAllTodosQuery();
  var [lazyGetAllTodosFn] = useLazyGetAllTodosQuery();
  let [deleteTodoFn] = useDeleteTodoMutation();
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      <Link to="/addTodo">Add Todo</Link>
      {isLoading && <b>Loading</b>}
      {!isLoading && (
        <ul>
          {data.map((todo) => {
            return (
              <li>
                {todo.title}
                <button
                  onClick={() => {
                    deleteTodoFn(todo.id).then(() => {
                      lazyGetAllTodosFn();
                    });
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todolist;
