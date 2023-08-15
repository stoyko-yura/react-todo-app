import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
  element?: HTMLElement;
}

export const Portal = ({ element = document.body, children }: PortalProps) => {
  return createPortal(children, element);
};
