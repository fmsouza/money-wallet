module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:sonarjs/recommended',
  ],
  plugins: ['prettier', 'sonarjs'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': ['off'],
    'sonarjs/cognitive-complexity': ['error', 20],
    'import/prefer-default-export': ['off'],
    'jest/no-disabled-tests': ['off'],
  },
};
