import cn from 'classnames';

import type { UiSize } from '@/types';

import styles from './IconButton.module.scss';

interface IconButtonProps extends ReactTagProps<'button'> {
  size?: UiSize;
  icon: React.ReactNode;
}

export const IconButton = ({ size = 'md', icon, ...props }: IconButtonProps) => {
  return (
    <button className={cn(styles.iconButton, styles[size])} {...props}>
      {icon}
    </button>
  );
};
