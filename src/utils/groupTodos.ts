import type { TodoItem } from '@/types';

type GroupBy = 'alphabet' | 'date';

type TodosBy = {
  [date: string]: TodoItem[];
};

export const groupTodos = (todos: TodoItem[], groupBy: GroupBy) => {
  const todosBy = todos.reduce<TodosBy>((acc, todo) => {
    let todoKey = '';

    if (groupBy === 'alphabet') todoKey = todo.title.charAt(0);
    if (groupBy === 'date') todoKey = new Date(todo.createdAt).toISOString().split('T')[0]!;

    if (!acc[todoKey]) {
      acc[todoKey] = [];
    }

    acc[todoKey].push(todo);

    return acc;
  }, {});

  return todosBy;
};
