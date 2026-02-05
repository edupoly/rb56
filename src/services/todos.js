// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/todos",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ``,
    }),
    addTodo: builder.mutation({
      query: (todo) => {
        return {
          url: "/",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
