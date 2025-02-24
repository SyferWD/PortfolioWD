import '@testing-library/jest-dom';
import React from 'react';

// Fix TypeScript errors by defining the prop type
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    return React.createElement('img', props);
  },
}));
