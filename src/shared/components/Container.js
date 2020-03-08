import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { makeStyles } from '../styles';

const useStyles = makeStyles(theme => ({
  safeWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

export const Container = ({ children, style }) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.safeWrapper}>
      <View style={StyleSheet.flatten([styles.container, style])}>
        {children}
      </View>
    </SafeAreaView>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Container.defaultProps = {
  style: {},
};
