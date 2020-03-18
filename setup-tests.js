const originalConsoleError = console.error;

console.error = (...args) => {
  if (!args[0].startsWith('Warning:')) {
    originalConsoleError(...args);
  }
};

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
