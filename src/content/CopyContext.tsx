"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import contentSets from './marketingCopy.json';

// Define content set types
export type ContentSet = 'set1' | 'set2' | 'set3';
type ContentSets = typeof contentSets;
export type CopyContent = ContentSets[ContentSet];

interface CopyContextType {
  content: CopyContent;
  copySet: ContentSet;
  setCopySet: (set: ContentSet) => void;
  availableCopySets: ContentSet[];
}

// Create context with default value
const CopyContext = createContext<CopyContextType | undefined>(undefined);

// Provider component
export const CopyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [copySet, setCopySet] = useState<ContentSet>('set1');
  const content = contentSets[copySet];
  const availableCopySets: ContentSet[] = ['set1', 'set2', 'set3'];

  return (
    <CopyContext.Provider value={{ content, copySet, setCopySet, availableCopySets }}>
      {children}
    </CopyContext.Provider>
  );
};

// Custom hook for using the copy content
export const useCopy = () => {
  const context = useContext(CopyContext);
  if (context === undefined) {
    throw new Error('useCopy must be used within a CopyProvider');
  }
  return context;
};
