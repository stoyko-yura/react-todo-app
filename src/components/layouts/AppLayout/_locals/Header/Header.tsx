import { IconSunHigh } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { Button, IconButton } from '@/components/ui';
import { useTheme } from '@/hooks';

import styles from './Header.module.scss';

export const Header = () => {
  const { i18n } = useTranslation();
  const { toggleTheme } = useTheme();

  const handleToggleLanguage = () => {
    const currentLanguage = i18n.language === 'ua' ? 'en' : 'ua';

    i18n.changeLanguage(currentLanguage);

    window.localStorage.setItem('i18nextLng', currentLanguage);
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Simple Todo</h2>

      <div className={styles.controls}>
        <Button onClick={handleToggleLanguage}>{i18n.language.toUpperCase()}</Button>
        <IconButton icon={<IconSunHigh />} onClick={toggleTheme} />
      </div>
    </header>
  );
};
