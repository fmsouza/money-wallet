import { StyleSheet } from 'react-native';
import { useTheme } from '~shared/providers';

export const makeStyles = fn => () => {
  const { theme } = useTheme();
  return StyleSheet.create(fn(theme));
};
