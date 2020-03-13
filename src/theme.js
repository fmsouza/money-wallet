import { Dimensions } from 'react-native';
import color from 'color';

const { width: maxWidth, height: maxHeight } = Dimensions.get('window');

export const Color = {
  primary: '#074F57',
  secondary: '#D4C2FC',
  background: '#f2f2f2',
  text: '#1c1c1e',
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
    barStyle: 'dark-content',
    backgroundColor: color(Color.background)
      .darken(0.4)
      .hex()
      .toString(),
  },
  navbar: {
    headerStyle: {
      shadowOpacity: 0,
      elevation: 0,
      backgroundColor: Color.backgroud,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: Color.text,
    },
    headerTintColor: Color.text,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: Color.black,
    text: Color.white,
    border: Color.white,
  },
  statusBar: {
    barStyle: 'light-content',
    backgroundColor: color(Color.black)
      .darken(0.4)
      .hex()
      .toString(),
  },
  navbar: {
    headerStyle: {
      ...lightTheme.navbar.headerStyle,
      backgroundColor: Color.black,
    },
    headerTintColor: Color.white,
  },
};
