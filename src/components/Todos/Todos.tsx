import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TodosList } from '@/components/lists';
import { useAppSelector } from '@/hooks';

import styles from './Todos.module.scss';

export const Todos = () => {
  const { t } = useTranslation();

  const todos = useAppSelector((state) => state.todoSlice.todos);

  const doingTodos = useMemo(() => todos.filter((todo) => !todo.isAccepted), [todos]);
  const acceptedTodos = useMemo(() => todos.filter((todo) => todo.isAccepted), [todos]);

  return (
    <div className={styles.todos}>
      <TodosList title={t('todosList.doing', { doingTodos })} todos={doingTodos} />

      <TodosList title={t('todosList.accepted', { acceptedTodos })} todos={acceptedTodos} />
    </div>
  );
};
