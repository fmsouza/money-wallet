module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.js', '.json'],
        alias: {
          '~app': './src',
          '~shared': './src/shared',
        },
      },
    ],
  ],
};
