import { TodoCard } from '@/components/cards';
import type { TodoItem } from '@/types';

import styles from './TodosGroup.module.scss';

interface TodosGroupProps {
  title: string;
  todos: TodoItem[];
}

export const TodosGroup = ({ title, todos }: TodosGroupProps) => {
  return (
    <div className={styles.todosGroup}>
      <p>{title}</p>

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
};
