import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { productsApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todosApi } from "../services/todos";
import { recipesApi } from "../services/recipes";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      todosApi.middleware,
      recipesApi.middleware,
    ),
});
setupListeners(store.dispatch);
