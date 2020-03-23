import { Dimensions } from 'react-native';
import color from 'color';

const { width: maxWidth, height: maxHeight } = Dimensions.get('window');

export const Color = {
  primary: '#074F57',
  primaryDarker: color('#074F57')
    .darken(0.4)
    .hex()
    .toString(),
  secondary: '#D4C2FC',
  background: '#f2f2f2',
  text: '#1c1c1e',
  invertedText: '#f2f2f2',
  white: '#ffffff',
  black: '#000000',
  border: '#dddddd',
};

export const lightTheme = {
  colors: { ...Color },
  margin: 8,
  padding: 8,
  maxWidth,
  maxHeight,
  statusBar: {
    barStyle: 'light-content',
    backgroundColor: Color.primaryDarker,
  },
  navbar: {
    headerStyle: {
      shadowOpacity: 0,
      elevation: 0,
      backgroundColor: Color.primary,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: Color.invertedText,
    },
    headerTintColor: Color.invertedText,
  },
};

const darkBg = '#202125';
const evenDarkerBg = color(darkBg)
  .darken(0.4)
  .hex()
  .toString();

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: darkBg,
    text: Color.white,
    border: Color.white,
  },
  statusBar: {
    barStyle: 'light-content',
    backgroundColor: evenDarkerBg,
  },
  navbar: {
    headerStyle: {
      ...lightTheme.navbar.headerStyle,
      backgroundColor: evenDarkerBg,
    },
    headerTintColor: Color.invertedText,
  },
};
