import type { SortKeys, TodoItem } from '@/types';

export const useSortTodos = (todos: TodoItem[], sortKey: SortKeys) => {
  switch (sortKey) {
    case 'alphabet': {
      todos.sort((todoA, todoB) => {
        if (todoA.title < todoB.title) return -1;
        if (todoA.title > todoB.title) return 1;
        return 0;
      });
      break;
    }
    case 'alphabet-reversed': {
      todos.sort((todoA, todoB) => {
        if (todoA.title > todoB.title) return -1;
        if (todoA.title < todoB.title) return 1;
        return 0;
      });
      break;
    }
    case 'date': {
      todos.sort((todoA, todoB) => {
        const todoATime = new Date(
          todoA.isAccepted ? todoA.acceptedAt! : todoA.createdAt
        ).getTime();
        const todoBTime = new Date(
          todoB.isAccepted ? todoB.acceptedAt! : todoB.createdAt
        ).getTime();

        return todoATime - todoBTime;
      });
      break;
    }
    case 'date-reversed': {
      todos.sort((todoA, todoB) => {
        const todoATime = new Date(
          todoA.isAccepted ? todoA.acceptedAt! : todoA.createdAt
        ).getTime();
        const todoBTime = new Date(
          todoB.isAccepted ? todoB.acceptedAt! : todoB.createdAt
        ).getTime();

        return todoBTime - todoATime;
      });
      break;
    }
    default: {
      break;
    }
  }
};
