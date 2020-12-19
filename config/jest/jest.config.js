const path = require('path');

module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/index.js'],
  coverageReporter: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFiles: [path.resolve(__dirname, 'setupTests.js')],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)'
  ],
  transforms: {
    '^.+\\.(js|jsx)$': path.resolve(__dirname, 'babelTransform.js'),
    '^.+\\.s?css$': path.resolve(__dirname, 'cssTransform.js'),
    '^(?!.*\\.(js|jsx|css|json|png|svg)$)': path.resolve(__dirname, 'fileTransform.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  rootDir: process.cwd(),
}