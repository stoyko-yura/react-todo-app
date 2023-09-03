import cn from 'classnames';

import styles from './ColorCard.module.scss';

interface ColorCardProps extends ReactTagProps<'div'> {
  color?: string;
  isDisabled?: boolean;
}

export const ColorCard = ({
  color = 'transparent',
  isDisabled = false,
  ...props
}: ColorCardProps) => {
  return (
    <div
      {...props}
      style={{ backgroundColor: color }}
      className={cn(styles.colorCard, {
        [styles.isDisabled]: isDisabled,
        [styles.isTransparent]: color === 'transparent'
      })}
    />
  );
};
