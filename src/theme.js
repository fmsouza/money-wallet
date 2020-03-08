import merge from 'lodash/merge';
import color from 'color';
import { DefaultTheme } from '@react-navigation/native';

const darkMode = false;

export const Color = {
  primary: '#074F57',
  secondary: '#D4C2FC',
  background: '#f2f2f2',
  text: '#1c1c1e',
  white: '#ffffff',
  black: '#000000',
};

export const statusBarTheme = {
  barStyle: 'light-content',
  backgroundColor: color(Color.primary)
    .darken(0.4)
    .hex()
    .toString(),
};

export const headerTheme = {
  headerStyle: {
    backgroundColor: Color.primary,
  },
  headerTintColor: Color.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default merge(
  { ...DefaultTheme },
  {
    dark: darkMode,
    colors: { ...Color },
    header: {
      background: Color.primary,
      tint: Color.white,
      titleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
