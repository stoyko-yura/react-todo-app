import { IconCheck, IconEraser, IconSearch } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '@/components/ui';
import type { SearchTodoQuery } from '@/types';

import styles from './SearchTodoForm.module.scss';

interface SearchTodoFormProps {
  defaultValue?: string;
  onSave?: (value: string) => void;
  onClose?: () => void;
}

export const SearchTodoForm = ({ defaultValue, onSave, onClose }: SearchTodoFormProps) => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm<SearchTodoQuery>({
    defaultValues: { searchValue: defaultValue || '' }
  });

  const handleSubmitForm = (values: SearchTodoQuery) => {
    const { searchValue } = values;

    if (onSave) onSave(searchValue);

    if (onClose) onClose();
  };

  const handleClearForm = () => {
    if (onSave) onSave('');

    if (onClose) onClose();
  };

  return (
    <form className={styles.searchTodoForm} onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        placeholder={t('searchTodoForm.inputPlaceholder')}
        startIcon={<IconSearch />}
        {...register('searchValue')}
      />

      <div className={styles.controls}>
        <Button startIcon={<IconEraser />} type='button' onClick={handleClearForm}>
          {t('searchTodoForm.resetButton')}
        </Button>
        <Button startIcon={<IconCheck />} type='submit'>
          {t('searchTodoForm.submitButton')}
        </Button>
      </div>
    </form>
  );
};
