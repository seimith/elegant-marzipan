"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import contentSets from './marketingCopy.json';
import { CopyContentType } from '../types/copyTypes';

// Define content set types
export type ContentSet = 'set1' | 'set2' | 'set3';
type ContentSets = typeof contentSets;

// Use our imported type for better type safety
export type CopyContent = CopyContentType;

// Use this type to reference the JSON structure
export type ContentSetData = ContentSets[ContentSet];

interface CopyContextType {
  content: CopyContent;
  copySet: ContentSet;
  setCopySet: (set: ContentSet) => void;
  availableCopySets: ContentSet[];
  // Additional properties for new UI
  activeCopySet: ContentSet;
  switchCopySet: (set: ContentSet) => void;
}

// Create context with default value
const CopyContext = createContext<CopyContextType | undefined>(undefined);

// Provider component
export const CopyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [copySet, setCopySet] = useState<ContentSet>('set1');
  const content = contentSets[copySet];
  const availableCopySets: ContentSet[] = ['set1', 'set2', 'set3'];
  
  // Function to handle copy set switching
  const switchCopySet = (set: ContentSet) => {
    setCopySet(set);
  };

  return (
    <CopyContext.Provider value={{
      content,
      copySet,
      setCopySet,
      availableCopySets,
      activeCopySet: copySet, // Alias for new UI
      switchCopySet // Function for new UI
    }}>
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
