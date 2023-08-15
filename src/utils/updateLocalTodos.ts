import type { TodoItem } from '@/types';

export const updateLocalTodos = (todos: TodoItem[]): void => {
  window.localStorage.setItem('todos', JSON.stringify(todos));
};
