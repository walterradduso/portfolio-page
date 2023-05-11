'use client';

import React, { createContext, useContext, useState } from 'react';

interface ActiveSectionContextValue {
  activeSection: string | null;
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextValue | undefined>(undefined);

export const useActiveSection = (): ActiveSectionContextValue => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }

  return context;
};

interface ActiveSectionProviderProps {
  initialActiveSection: string | null;
  children: React.ReactNode;
}

export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ initialActiveSection, children }) => {
  const [activeSection, setActiveSection] = useState<string | null>(initialActiveSection);

  return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</ActiveSectionContext.Provider>;
};
