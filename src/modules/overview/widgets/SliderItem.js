import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { makeStyles } from '~shared/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: theme.maxWidth - theme.margin * 2,
  },
  card: {
    backgroundColor: theme.colors.background,
    width: theme.maxWidth * 0.8,
    height: theme.maxWidth * 0.7,
    borderRadius: 6,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
  },
}));

export const SliderItem = ({ children, onPress }) => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.card}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

SliderItem.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

SliderItem.defaultProps = {
  onPress: () => {},
};
