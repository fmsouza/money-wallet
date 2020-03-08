import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const makeStyles = fn => () => {
  const theme = useTheme();
  return StyleSheet.create(fn(theme));
};
