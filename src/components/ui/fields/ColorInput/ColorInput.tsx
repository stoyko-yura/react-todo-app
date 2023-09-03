import { useState } from 'react';

import { ColorCard } from '@/components/cards';

import styles from './ColorInput.module.scss';

interface ColorInputProps {
  value?: string;
  defaultValue?: string;
  colors: string[];
  placeholder?: string;
  onChange: (color: string) => void;
}

export const ColorInput = ({
  value,
  defaultValue,
  colors,
  placeholder,
  onChange
}: ColorInputProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    defaultValue || value || 'transparent'
  );
  const [isColorsOpen, setColorsOpen] = useState<boolean>(false);

  const handleToggleColorsOpen = () => {
    setColorsOpen((prev) => !prev);
  };

  const handleChangeColor = (color: string) => {
    onChange(color);
    setSelectedColor(color);
    setColorsOpen(false);
  };

  return (
    <div className={styles.colorInput}>
      <div className={styles.header}>
        <p>{placeholder}</p>
        <ColorCard color={selectedColor} onClick={handleToggleColorsOpen} />
      </div>

      {isColorsOpen && (
        <ul className={styles.colors}>
          {colors.map((color, index) => {
            if (color === selectedColor) return null;

            return (
              <li key={index}>
                <ColorCard color={color} onClick={() => handleChangeColor(color)} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
