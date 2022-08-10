import { DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import merge from 'deepmerge';

import colors from './colors';

const customTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...colors,
  },
};

export const theme = merge(customTheme, NavigationDarkTheme);

export type ThemeOverride = typeof theme;
