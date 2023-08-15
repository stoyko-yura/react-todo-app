import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TodoItem } from '@/types';
import { updateLocalTodos } from '@/utils';

interface TodoState {
  todos: TodoItem[];
}

const initialState: TodoState = {
  todos: JSON.parse(window.localStorage.getItem('todos')!) ?? []
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TodoItem>) => {
      state.todos.push(payload);

      updateLocalTodos(state.todos);
    },
    editTodo: (state, { payload }: PayloadAction<TodoItem>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo = payload;
        }

        return todo;
      });

      updateLocalTodos(state.todos);
    },
    removeTodo: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);

      updateLocalTodos(state.todos);
    }
  }
});

export const { reducer: todoReducer, actions: todoActions } = todoSlice;
