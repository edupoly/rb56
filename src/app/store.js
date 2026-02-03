import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { productsApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todosApi } from "../services/todos";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, todosApi.middleware),
});
setupListeners(store.dispatch);
