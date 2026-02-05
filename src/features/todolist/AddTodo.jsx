import { useFormik } from "formik";
import React from "react";
import {
  useAddTodoMutation,
  useLazyGetAllTodosQuery,
} from "../../services/todos";

function AddTodo() {
  var [addTodoFn] = useAddTodoMutation();
  var [lazyGetAllTodosFn] = useLazyGetAllTodosQuery();

  let todoForm = useFormik({
    initialValues: {
      userId: 1,
      title: "",
      completed: false,
    },
    onSubmit: (values) => {
      addTodoFn(values).then(() => {
        lazyGetAllTodosFn();
      });
    },
  });
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>AddTodo</h1>
      <form onSubmit={todoForm.handleSubmit}>
        <input type="text" {...todoForm.getFieldProps("title")} />
        <br />
        <input
          type="radio"
          {...todoForm.getFieldProps("completed")}
          value="true"
        />
        :Completed
        <input
          type="radio"
          {...todoForm.getFieldProps("completed")}
          value="false"
        />
        :NotCompleted
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
