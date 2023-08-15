import { IconSunHigh } from '@tabler/icons-react';

import { IconButton } from '@/components/ui';
import { useTheme } from '@/hooks';

import styles from './Header.module.scss';

export const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Simple Todo</h2>

      <div className={styles.controls}>
        <IconButton icon={<IconSunHigh />} onClick={toggleTheme} />
      </div>
    </header>
  );
};
