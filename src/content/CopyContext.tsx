"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import contentSets from './marketingCopy.json';
import { CopyContentType } from '../types/copyTypes';
import { trackCopySetView } from '../lib/analytics';

// Define content set types
export type ContentSet = 'set1' | 'set2';
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
  // Use useMemo to prevent recreation on every render
  const availableCopySets = useMemo<ContentSet[]>(() => ['set1', 'set2'], []);
  
  // Define weights to show only set2 100% of the time
  // set1 has 0% chance and set2 has 100% chance of being selected
  const copySetWeights = useMemo(() => ({
    'set1': 0, // 0%
    'set2': 1 // 100%
  }), []);
  
  // Initial copy set - always start with 'set2' since we want to show it 100% of the time
  const [copySet, setCopySet] = useState<ContentSet>('set2');
  
  // Get weighted random copy set after initial hydration
  useEffect(() => {
    // Only run on client-side after hydration is complete
    if (typeof window !== 'undefined') {
      // Choose a random copy set based on weights
      const totalWeight = Object.values(copySetWeights).reduce((sum, weight) => sum + weight, 0);
      const randomNum = Math.random() * totalWeight;
      
      let weightSum = 0;
      for (const set of availableCopySets) {
        weightSum += copySetWeights[set];
        if (randomNum < weightSum) {
          setCopySet(set);
          break;
        }
      }
    }
  }, [availableCopySets, copySetWeights]); // Add dependencies as recommended by ESLint
  const content = contentSets[copySet];
  
  // Track which copy set is displayed to the user
  useEffect(() => {
    // Only track on client-side and skip the initial server-rendered 'set1' unless it was chosen randomly
    if (typeof window !== 'undefined') {
      // Only track and update URL/storage when copy set changes (skip initial hydration)
      if (document.readyState === 'complete') {
        trackCopySetView(copySet);
        
        // Store in sessionStorage to allow persistent analysis
        sessionStorage.setItem('activeCopySet', copySet);
      }
    }
  }, [copySet]);
  
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
