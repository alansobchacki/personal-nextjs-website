'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface EasterEggContextType {
  clickCount: number;
  registerClick: () => void;
  easterEggActive: boolean;
}

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined);

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [clickCount, setClickCount] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);

  const registerClick = () => {
    setClickCount((prev) => {
      const updated = prev + 1;
      if (updated === 10) setEasterEggActive(true);
      
      return updated;
    });
  };

  return (
    <EasterEggContext.Provider value={{ clickCount, registerClick, easterEggActive }}>
      {children}
    </EasterEggContext.Provider>
  );
}

export function useEasterEgg() {
  const context = useContext(EasterEggContext);
  if (!context) throw new Error('useEasterEgg must be used within an EasterEggProvider');
  
  return context;
}
