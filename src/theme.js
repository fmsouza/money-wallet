import { Dimensions } from 'react-native';
import merge from 'lodash/merge';
import color from 'color';
import { DefaultTheme } from '@react-navigation/native';

const { width: maxWidth, height: maxHeight } = Dimensions.get('window');

export const Color = {
  primary: '#074F57',
  secondary: '#D4C2FC',
  background: '#f2f2f2',
  text: '#1c1c1e',
  white: '#ffffff',
  black: '#000000',
};

export const lightTheme = merge(
  { ...DefaultTheme },
  {
    colors: { ...Color },
    margin: 8,
    padding: 8,
    maxWidth,
    maxHeight,
    statusBar: {
      barStyle: 'light-content',
      backgroundColor: color(Color.primary)
        .darken(0.4)
        .hex()
        .toString(),
    },
    navbar: {
      headerStyle: {
        backgroundColor: Color.backgroud,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Color.text,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export const darkTheme = lightTheme;
