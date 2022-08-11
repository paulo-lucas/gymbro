import React, { useState, createContext, useCallback, useMemo } from 'react';
import { Appearance } from 'react-native';

import { ProviderProps, ThemeData } from '@app/entities/context';
import { defaultTheme, darkTheme } from '@app/theme';

export const ThemeContext = createContext({} as ThemeData);

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(colorScheme === 'dark');

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const theme = isThemeDark ? darkTheme : defaultTheme;

  const themeData: ThemeData = useMemo(
    () => ({
      theme,
      toggleTheme,
      isThemeDark,
    }),
    [theme, toggleTheme, isThemeDark],
  );

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
