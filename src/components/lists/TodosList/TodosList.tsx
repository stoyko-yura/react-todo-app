import { IconSearch } from '@tabler/icons-react';
import cn from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TodoCard } from '@/components/cards';
import { SearchTodoForm } from '@/components/forms';
import { IconButton, Modal, Select } from '@/components/ui';
import { MAX_LIST_HEIGHT } from '@/constants';
import { useScrollOverflow } from '@/hooks';
import type { SortKeys, TodoItem } from '@/types';
import { groupTodos, searchTodos, sortTodos } from '@/utils';

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

  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  const searchedTodos = searchTodos(todos, searchValue);
  const sortedTodos = sortTodos(searchedTodos, selectedSortKey);
  const groupedTodos = groupTodos(
    sortedTodos,
    selectedSortKey.includes('alphabet') ? 'alphabet' : 'date'
  );

  const handleOnSelect = (option: string) => {
    setSelectedSortKey(
      Object.keys(translatedSortKeys)[Object.values(translatedSortKeys).indexOf(option)] as SortKeys
    );
  };

  const handleOpenSearchModal = () => setSearchModalOpen(true);
  const handleCloseSearchModal = () => setSearchModalOpen(false);

  return (
    <>
      <Modal
        isOpen={isSearchModalOpen}
        title={t('todosList.modalTitle')}
        onClose={handleCloseSearchModal}
      >
        <SearchTodoForm
          defaultValue={searchValue}
          onClose={handleCloseSearchModal}
          onSave={(value) => setSearchValue(value)}
        />
      </Modal>

      <div className={styles.todosList}>
        <div className={styles.header}>
          <h3>{title}</h3>

          <div className={styles.controls}>
            <IconButton icon={<IconSearch />} onClick={handleOpenSearchModal} />

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
    </>
  );
};
