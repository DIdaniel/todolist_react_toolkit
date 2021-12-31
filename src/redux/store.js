import { configureStore } from "@reduxjs/toolkit";
import TodoSliceReducer from "./features/TodoSlice";

export default configureStore({
  reducer: {
    todos: TodoSliceReducer,
  },
});
