import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui';
import { useClickOutside } from '@/hooks';

import styles from './Select.module.scss';

interface SelectProps {
  defaultValue?: string;
  options: string[];
  onSelect: (option: string) => void;
}

export const Select = ({ defaultValue = '', options, onSelect }: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<string>(defaultValue || '');
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useClickOutside(selectRef, () => setDropdownOpen(false));

  useEffect(() => {
    setSelected(defaultValue);
    onSelect(defaultValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  const handleToggleDropdownOpen = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelectOption = (option: string) => {
    setSelected(option);
    onSelect(option);
    setDropdownOpen(false);
  };

  return (
    <div ref={selectRef} className={styles.select}>
      <Button
        endIcon={isDropdownOpen ? <IconChevronUp /> : <IconChevronDown />}
        onClick={handleToggleDropdownOpen}
      >
        {selected}
      </Button>

      {isDropdownOpen && (
        <ul className={styles.options}>
          {options.map((option, index) => {
            if (option === selected) return null;

            return (
              <li key={index}>
                <div
                  aria-hidden
                  className={styles.option}
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
