import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

import { useTheme } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.margin,
    marginHorizontal: theme.margin / 2,
    height: 80,
    width: 100,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primaryDarker,
  },
  title: {
    fontSize: 16,
    color: theme.colors.invertedText,
  },
}));

export const OperationItem = ({ title, icon, iconType, onPress }) => {
  const styles = useStyles();
  const { theme } = useTheme();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} type={iconType} color={theme.colors.invertedText} />
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
