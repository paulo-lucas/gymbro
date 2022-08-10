import React, { createContext, useState, useCallback, useMemo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeData } from '@app/interfaces/theme';

import { defaultTheme, darkTheme } from '@app/theme';

interface ContextData {
  theme: ThemeData;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as ContextData);

const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);

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
