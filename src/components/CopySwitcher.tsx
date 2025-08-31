"use client";

import React from 'react';
import { useCopy, ContentSet } from '../content/CopyContext';

const CopySwitcher = () => {
  const { copySet, setCopySet, availableCopySets } = useCopy();

  return (
    <div className="fixed top-0 right-0 z-50 bg-white shadow-md p-2 rounded-bl-lg">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Copy Set:</span>
        <select 
          value={copySet}
          onChange={(e) => setCopySet(e.target.value as ContentSet)}
          className="text-sm border border-gray-300 rounded px-2 py-1"
        >
          {availableCopySets.map((set) => (
            <option key={set} value={set}>
              {set.charAt(0).toUpperCase() + set.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CopySwitcher;
