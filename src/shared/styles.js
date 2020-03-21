import { StyleSheet } from 'react-native';
import color from 'color';
import { useTheme } from '~shared/providers';

export const makeStyles = fn => () => {
  const { theme } = useTheme();
  return StyleSheet.create(fn(theme));
};

export const flatten = (...styles) =>
  StyleSheet.flatten([...styles].filter(Boolean));

export const randomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return color({ r, g, b })
    .hex()
    .toString();
};
