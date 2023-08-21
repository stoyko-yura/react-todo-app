import cn from 'classnames';
import { useState } from 'react';

import { TodoCard } from '@/components/cards';
import { Select } from '@/components/ui';
import { MAX_LIST_HEIGHT, SORT_KEYS } from '@/constants';
import { useScrollOverflow, useSortTodos } from '@/hooks';
import type { SortKeys, TodoItem } from '@/types';

import styles from './TodosList.module.scss';

interface TodosListProps {
  title?: string;
  todos: TodoItem[];
}

export const TodosList = ({ title, todos }: TodosListProps) => {
  const { ref, isScrollVissible } = useScrollOverflow<HTMLUListElement>(MAX_LIST_HEIGHT);

  const [sortKey, setSortKey] = useState<SortKeys>('alphabet');

  useSortTodos(todos, sortKey);

  return (
    <div className={styles.todosList}>
      <div className={styles.header}>
        <h3>{title}</h3>

        <div className={styles.controls}>
          <Select
            options={SORT_KEYS}
            selected={sortKey}
            onSelect={(option) => setSortKey(option as SortKeys)}
          />
        </div>
      </div>

      <ul
        ref={ref}
        className={cn(styles.list, { [styles.isScrollVissible]: isScrollVissible })}
        style={{ maxHeight: `${MAX_LIST_HEIGHT}px` }}
      >
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoCard todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
