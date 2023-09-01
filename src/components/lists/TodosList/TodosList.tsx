import cn from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TodoCard } from '@/components/cards';
import { Select } from '@/components/ui';
import { MAX_LIST_HEIGHT } from '@/constants';
import { useScrollOverflow } from '@/hooks';
import type { SortKeys, TodoItem } from '@/types';
import { groupTodos, sortTodos } from '@/utils';

import styles from './TodosList.module.scss';

interface TodosListProps {
  title?: string;
  todos: TodoItem[];
}

export const TodosList = ({ title, todos }: TodosListProps) => {
  const { t } = useTranslation();
  const { ref, isScrollVissible } = useScrollOverflow<HTMLUListElement>(MAX_LIST_HEIGHT);

  const translatedSortKeys = t('todosList.sortKeys', { returnObjects: true });

  const [selectedSortKey, setSelectedSortKey] = useState<SortKeys>(
    Object.keys(t('todosList.sortKeys', { returnObjects: true }))[0] as SortKeys
  );

  const sortedTodos = sortTodos(todos, selectedSortKey);
  const groupedTodos = groupTodos(
    sortedTodos,
    selectedSortKey.includes('alphabet') ? 'alphabet' : 'date'
  );

  const handleOnSelect = (option: string) => {
    setSelectedSortKey(
      Object.keys(translatedSortKeys)[Object.values(translatedSortKeys).indexOf(option)] as SortKeys
    );
  };

  return (
    <div className={styles.todosList}>
      <div className={styles.header}>
        <h3>{title}</h3>

        <div className={styles.controls}>
          <Select
            defaultValue={Object.values(translatedSortKeys)[0]}
            options={Object.values(translatedSortKeys)}
            onSelect={handleOnSelect}
          />
        </div>
      </div>

      <ul
        ref={ref}
        className={cn(styles.list, { [styles.isScrollVissible]: isScrollVissible })}
        style={{ maxHeight: `${MAX_LIST_HEIGHT}px` }}
      >
        {Object.entries(groupedTodos).map(([todoKey, todos], index) => {
          return (
            <div key={index} className={styles.listGroup}>
              <p>{todoKey}</p>

              <ul className={styles.list}>
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
        })}
      </ul>
    </div>
  );
};
