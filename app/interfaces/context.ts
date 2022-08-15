import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface ProviderProps {
  children: React.ReactNode;
}

export interface GlobalData {
  user: FirebaseAuthTypes.User | null;
}

export interface ThemeData {
  theme: ReactNativePaper.Theme;
  isThemeDark: boolean;
  toggleTheme(): void;
}
