import { useMemo } from 'react';

import { TodosList } from '@/components/lists';
import { useAppSelector } from '@/hooks';

import styles from './Todos.module.scss';

export const Todos = () => {
  const todos = useAppSelector((state) => state.todoSlice.todos);

  const doingTodos = useMemo(() => todos.filter((todo) => !todo.isAccepted), [todos]);
  const acceptedTodos = useMemo(() => todos.filter((todo) => todo.isAccepted), [todos]);

  return (
    <div className={styles.todos}>
      <TodosList title={`Doing: ${doingTodos.length}`} todos={doingTodos} />

      <TodosList title={`Accepted: ${acceptedTodos.length}`} todos={acceptedTodos} />
    </div>
  );
};
