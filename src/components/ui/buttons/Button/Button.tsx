import cn from 'classnames';

import type { UiSize } from '@/types';

import styles from './Button.module.scss';

interface ButtonProps extends ReactTagProps<'button'> {
  size?: UiSize;
  isFull?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  isFull = false,
  size = 'md',
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[size], { [styles.isFull]: isFull })} {...props}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
