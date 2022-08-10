import React, { createContext, useState, useCallback, useMemo } from 'react';
import { Appearance } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeData } from '@app/entities/theme';

import { defaultTheme, darkTheme } from '@app/theme';

interface ContextData {
  theme: ThemeData;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as ContextData);

const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(colorScheme === 'dark');

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const theme = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  let currentTheme = isThemeDark ? darkTheme : defaultTheme;

  return (
    <GlobalContext.Provider value={{ theme }}>
      <PaperProvider theme={currentTheme}>
        <NavigationContainer theme={currentTheme}>
          {children}
        </NavigationContainer>
      </PaperProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
