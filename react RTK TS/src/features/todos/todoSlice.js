import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: (Math.random() * 5).toFixed(0),
        title: action.payload.title,
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.title !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;

// module.exports = todoSlice.reducer;
// module.exports.todoActions = todoSlice.actions;
