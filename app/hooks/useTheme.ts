import { useContext } from 'react';
import { ThemeContext } from '@app/states/theme';

export const useTheme = () => useContext(ThemeContext);
