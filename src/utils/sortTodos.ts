import type { SortKeys, TodoItem } from '@/types';

export const sortTodos = (todos: TodoItem[], sortKey: SortKeys) => {
  const sortedTodos = [...todos];

  switch (sortKey) {
    case 'alphabet': {
      sortedTodos.sort((todoA, todoB) => {
        if (todoA.title < todoB.title) return -1;
        if (todoA.title > todoB.title) return 1;
        return 0;
      });

      break;
    }
    case 'alphabet-reversed': {
      sortedTodos.sort((todoA, todoB) => {
        if (todoB.title < todoA.title) return -1;
        if (todoB.title > todoA.title) return 1;
        return 0;
      });
      break;
    }
    case 'date': {
      sortedTodos.sort((todoA, todoB) => {
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
      sortedTodos.sort((todoA, todoB) => {
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
    default:
      break;
  }

  return sortedTodos;
};
