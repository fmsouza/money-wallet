import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.margin,
    marginHorizontal: theme.margin / 2,
    height: 80,
    width: 100,
    borderWidth: 2,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.border,
  },
  title: {
    fontSize: 16,
  },
}));

export const OperationItem = ({ title, icon, iconType, onPress }) => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} type={iconType} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

OperationItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  iconType: PropTypes.string,
};

OperationItem.defaultProps = {
  iconType: null,
};
