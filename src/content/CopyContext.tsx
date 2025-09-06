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
  const availableCopySets: ContentSet[] = ['set1', 'set2', 'set3'];
  
  // Define weights for each copy set (equal weights for even distribution)
  // Each copy set has a 33.3% chance of being selected
  const copySetWeights = {
    'set1': 1, // 33.3%
    'set2': 1, // 33.3%
    'set3': 1  // 33.3%
  };
  
  // Get weighted random copy set on initial load
  const getWeightedRandomCopySet = (): ContentSet => {
    // Only run on client-side to avoid hydration errors
    if (typeof window !== 'undefined') {
      // Calculate total weight
      const totalWeight = Object.values(copySetWeights).reduce((sum, weight) => sum + weight, 0);
      
      // Generate a random number between 0 and totalWeight
      const randomNum = Math.random() * totalWeight;
      
      // Find the corresponding copy set based on weights
      let weightSum = 0;
      for (const set of availableCopySets) {
        weightSum += copySetWeights[set];
        if (randomNum < weightSum) {
          return set;
        }
      }
    }
    return 'set1'; // Default for server-side rendering
  };
  
  const [copySet, setCopySet] = useState<ContentSet>(getWeightedRandomCopySet);
  const content = contentSets[copySet];
  
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
