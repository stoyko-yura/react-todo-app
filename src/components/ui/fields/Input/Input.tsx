import type { Ref } from 'react';
import { forwardRef } from 'react';

import styles from './Input.module.scss';

interface InputProps extends ReactTagProps<'input'> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ startIcon, endIcon, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className={styles.inputField}>
        {startIcon ?? startIcon}
        <input ref={ref} className={styles.input} {...props} />
        {endIcon ?? endIcon}
      </div>
    );
  }
);
