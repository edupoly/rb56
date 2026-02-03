import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todolist from "./features/todolist/Todolist.jsx";
import Counter from "./features/counter/Counter.jsx";
import Products from "./features/products/Products.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);
