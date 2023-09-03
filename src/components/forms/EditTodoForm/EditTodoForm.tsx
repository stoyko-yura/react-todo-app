import { IconCircleCheck } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '@/components/ui';
import { ColorInput } from '@/components/ui/fields/ColorInput';
import { PRIORITY_COLORS } from '@/constants';
import { useAppDispatch } from '@/hooks';
import { todoActions } from '@/store';
import type { TodoItem } from '@/types';

import styles from './EditTodoForm.module.scss';

interface EditTodoFormProps {
  todo: TodoItem;
  onSubmit?: () => void;
}

export const EditTodoForm = ({ todo, onSubmit }: EditTodoFormProps) => {
  const { t } = useTranslation();

  const { register, handleSubmit, setValue } = useForm<TodoItem>({ defaultValues: { ...todo } });

  const dispatch = useAppDispatch();

  const handleSubmitForm = (values: TodoItem) => {
    const params: TodoItem = { ...values, isAccepted: false, createdAt: new Date() };

    dispatch(todoActions.editTodo(params));

    if (onSubmit) onSubmit();
  };

  return (
    <form className={styles.editTodoForm} onSubmit={handleSubmit(handleSubmitForm)}>
      <ColorInput
        colors={PRIORITY_COLORS}
        placeholder={t('editTodoForm.colorInputPlaceholder')}
        value={todo.priorityColor}
        onChange={(color) => setValue('priorityColor', color)}
      />

      <Input placeholder={t('editTodoForm.inputPlaceholder')} {...register('title')} />

      <div className={styles.controls}>
        <Button endIcon={<IconCircleCheck />} type='submit'>
          {t('editTodoForm.submitButton')}
        </Button>
      </div>
    </form>
  );
};
