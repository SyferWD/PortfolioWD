/**
 * jest.config.js
 */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'], // Jest will search for tests starting from the root directory
  modulePaths: ['<rootDir>'], // Allows absolute imports from the root
  moduleDirectories: ['node_modules'], // Standard module resolution
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest', // Transpile JS/TS files
    '^.+\\.(css|less|sass|scss)$': 'jest-transform-stub', // Stub out CSS imports
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub' // Stub out image imports
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Runs our setup file after Jest is set up
  // Optionally, if you need further module name mapping you can add them here.
};
