import { IconNotes, IconPlus } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@/components/ui';
import { useAppDispatch } from '@/hooks';
import { todoActions } from '@/store';
import type { TodoItem } from '@/types';

import styles from './CreateTodoForm.module.scss';

export const CreateTodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset
  } = useForm<TodoItem>({
    defaultValues: { isAccepted: false, title: '' },
    mode: 'onChange'
  });

  const isValidForm = !isValid;

  const dispatch = useAppDispatch();

  const handleSubmitForm = (values: TodoItem) => {
    const params: TodoItem = { ...values, id: Date.now(), createdAt: new Date() };

    dispatch(todoActions.addTodo(params));

    reset();
  };

  return (
    <form className={styles.createTodoForm} onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        startIcon={<IconNotes />}
        {...register('title', { required: true, minLength: 1 })}
        placeholder='Enter new todo'
      />

      <Button disabled={isValidForm} endIcon={<IconPlus />} type='submit'>
        Add Todo
      </Button>
    </form>
  );
};
