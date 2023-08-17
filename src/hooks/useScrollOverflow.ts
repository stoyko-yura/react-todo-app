import { useEffect, useRef, useState } from 'react';

export const useScrollOverflow = <T extends HTMLElement>(height: number) => {
  const ref = useRef<T>(null);
  const [isScrollVissible, setScrollVissible] = useState<boolean>(false);

  const changeScrollVissible = () => {
    const refScrollHeight: number = Number(ref.current?.scrollHeight);

    setScrollVissible(() => refScrollHeight >= height);
  };

  useEffect(() => {
    changeScrollVissible();
  });

  return { ref, isScrollVissible };
};
