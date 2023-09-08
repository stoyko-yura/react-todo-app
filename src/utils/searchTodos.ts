import type { TodoItem } from '@/types';

export const searchTodos = (todos: TodoItem[], searchQuery: string) => {
  todos = todos.filter((todo) => {
    if (!todo.title.startsWith(searchQuery)) return null;

    return todo;
  });

  return todos;
};
