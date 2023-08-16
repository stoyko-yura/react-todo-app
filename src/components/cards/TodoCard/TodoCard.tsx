import { IconCheck, IconEdit, IconTrash, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { EditTodoForm } from '@/components/forms';
import { IconButton, Modal } from '@/components/ui';
import { useAppDispatch } from '@/hooks';
import { todoActions } from '@/store';
import type { TodoItem } from '@/types';
import { convertDate } from '@/utils';

import styles from './TodoCard.module.scss';

interface TodoCardProps {
  todo: TodoItem;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  const { t } = useTranslation();

  const [isModalOpened, setModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleToggleTodo = () => {
    const newTodo: TodoItem = {
      ...todo,
      isAccepted: !todo.isAccepted,
      acceptedAt: new Date()
    };

    dispatch(todoActions.editTodo(newTodo));
  };

  const handleRemoveTodo = () => {
    dispatch(todoActions.removeTodo({ id: todo.id }));
  };

  return (
    <>
      <Modal isOpen={isModalOpened} title={t('editTodoForm.modalTitle')} onClose={handleCloseModal}>
        <EditTodoForm todo={todo} onSubmit={handleCloseModal} />
      </Modal>

      <div className={styles.todoCard}>
        <p className={styles.createdAt}>
          {convertDate(todo.isAccepted ? todo.acceptedAt! : todo.createdAt)}
        </p>

        <p className={styles.title}>{todo.title}</p>

        <div className={styles.controls}>
          <IconButton
            icon={todo.isAccepted ? <IconX /> : <IconCheck />}
            size='sm'
            onClick={handleToggleTodo}
          />
          <IconButton icon={<IconTrash />} size='sm' onClick={handleRemoveTodo} />
          <IconButton icon={<IconEdit />} size='sm' onClick={handleOpenModal} />
        </div>
      </div>
    </>
  );
};
