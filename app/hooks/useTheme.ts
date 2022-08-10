import { useContext } from 'react';
import { GlobalContext } from '@app/states/global';

export const useTheme = () => {
  const { theme } = useContext(GlobalContext);
  return theme;
};
