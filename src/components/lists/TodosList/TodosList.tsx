import cn from 'classnames';

import { TodoCard } from '@/components/cards';
import { useScrollOverflow } from '@/hooks';
import type { TodoItem } from '@/types';

import styles from './TodosList.module.scss';

const MAX_LIST_HEIGHT = 300;

interface TodosListProps {
  title?: string;
  todos: TodoItem[];
}

export const TodosList = ({ title, todos }: TodosListProps) => {
  const [ref, isScrollVissible] = useScrollOverflow<HTMLUListElement>(MAX_LIST_HEIGHT);

  return (
    <>
      <h3>{title}</h3>
      <ul
        ref={ref}
        className={cn(styles.todosList, { [styles.isScrollVissible]: isScrollVissible })}
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
    </>
  );
};
