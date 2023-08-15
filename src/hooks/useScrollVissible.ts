import { useCallback, useRef } from 'react';

export const useScrollOverflow = <T extends HTMLElement>(height: number) => {
  const ref = useRef<T>(null);

  const isScrollVissible = useCallback(
    () => Number(ref.current?.clientHeight) <= height,
    [ref, height]
  );

  return [ref, isScrollVissible];
};
