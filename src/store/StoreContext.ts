import { createContext } from 'react';
import { initialState } from './Reducer';
import type { StoreContextType } from '../types/Reducer.types';

export const StoreContext = createContext<StoreContextType>({
    state: initialState,
    dispatch: () => { },
});