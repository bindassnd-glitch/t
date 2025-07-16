'use client';

import { FC, ReactNode } from 'react';
import { StoreContext } from './StoreContext';

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return (
    <StoreContext.Provider value={{ state: {}, dispatch: () => { } }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
