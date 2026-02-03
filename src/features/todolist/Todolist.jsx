import React from "react";
import { useGetAllTodosQuery } from "../../services/todos";

function Todolist() {
  var { isLoading, data } = useGetAllTodosQuery();
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      {isLoading && <b>Loading</b>}
      {!isLoading && (
        <ul>
          {data.map((todo) => {
            return <li>{todo.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Todolist;
