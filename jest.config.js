module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.test.js', '!src/App.js'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 66,
      lines: 70,
    },
  },
  setupFiles: [
    './node_modules/react-native/jest/setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!react-native|react-navigation-stack|@?react-navigation|react-navigation-fluid-transitions|@react-native-community)',
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
};
