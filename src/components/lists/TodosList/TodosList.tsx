import cn from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TodoCard } from '@/components/cards';
import { Select } from '@/components/ui';
import { MAX_LIST_HEIGHT } from '@/constants';
import { useScrollOverflow, useSortTodos } from '@/hooks';
import type { SortKeys, TodoItem } from '@/types';
import { groupTodos } from '@/utils';

import styles from './TodosList.module.scss';

interface TodosListProps {
  title?: string;
  todos: TodoItem[];
}

export const TodosList = ({ title, todos }: TodosListProps) => {
  const { t } = useTranslation();

  const translatedSortKeys = t('todosList.sortKeys', { returnObjects: true });

  const { ref, isScrollVissible } = useScrollOverflow<HTMLUListElement>(MAX_LIST_HEIGHT);

  const [selectedSortKey, setSelectedSortKey] = useState<string>(
    Object.keys(t('todosList.sortKeys', { returnObjects: true }))[0]
  );

  const groupedTodos = groupTodos(
    todos,
    selectedSortKey.includes('alphabet') ? 'alphabet' : 'date'
  );

  const handleOnSelect = (option: string) => {
    setSelectedSortKey(
      Object.keys(translatedSortKeys)[Object.values(translatedSortKeys).indexOf(option)]
    );
  };

  useSortTodos(todos, selectedSortKey as SortKeys);

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
        {Object.keys(groupedTodos).map((todoDateString, index) => {
          return (
            <div key={index} className={styles.listGroup}>
              <p>{todoDateString}</p>

              <ul className={styles.list}>
                {groupedTodos[todoDateString].map((todo) => {
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
