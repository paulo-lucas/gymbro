import React, { useEffect, useState, useMemo, createContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { useTheme } from '@app/hooks';
import { ProviderProps, GlobalData } from '@app/entities/context';

export const GlobalContext = createContext({} as GlobalData);

const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  const { theme } = useTheme();
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  const onAuthStateChanged = (firebaseUser: FirebaseAuthTypes.User | null) =>
    setUser(firebaseUser ?? undefined);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const globalData: GlobalData = useMemo(
    () => ({
      user,
    }),
    [user],
  );

  return (
    <GlobalContext.Provider value={globalData}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme as any}>
          {children}
        </NavigationContainer>
      </PaperProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
