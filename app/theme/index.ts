import {
  DefaultTheme as PaperDefault,
  DarkTheme as PaperDark,
} from 'react-native-paper';
import {
  DefaultTheme as NavigationDefault,
  DarkTheme as NavigationDark,
} from '@react-navigation/native';
import merge from 'deepmerge';

import colors from './colors';

const CustomDefault = {
  ...PaperDefault,
  colors: {
    ...PaperDefault.colors,
    ...colors,
  },
};

const CustomDark = {
  ...PaperDark,
  colors: {
    ...PaperDark.colors,
    ...colors,
  },
};

export const defaultTheme = merge(CustomDefault, NavigationDefault);
export const darkTheme = merge(CustomDark, NavigationDark);

export type ThemeOverride = typeof defaultTheme;
