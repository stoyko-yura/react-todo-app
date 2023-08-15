import { IconX } from '@tabler/icons-react';
import type { PropsWithChildren } from 'react';

import { IconButton, Portal } from '@/components/ui';

import styles from './Modal.module.scss';

interface ModalProps extends PropsWithChildren {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className={styles.modal}>
        <div aria-hidden className={styles.overlay} onClick={onClose}>
          <div aria-hidden className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <h3>{title}</h3>

              <IconButton icon={<IconX />} size='sm' onClick={onClose} />
            </div>

            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
