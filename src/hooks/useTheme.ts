import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') ?? 'light';

    setTheme(localTheme);

    document.documentElement.setAttribute('theme', localTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(currentTheme);

    window.localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('theme', currentTheme);
  };

  return { theme, toggleTheme };
};
