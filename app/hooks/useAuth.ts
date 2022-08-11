import { useContext } from 'react';
import { GlobalContext } from '@app/states/global';

export const useGlobal = () => useContext(GlobalContext);
