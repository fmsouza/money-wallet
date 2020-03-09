import React from 'react';
import PropTypes from 'prop-types';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import MDCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icon = ({ type, ...props }) => {
  const IconComponent = type === 'md' ? MDIcon : MDCIcon;
  return <IconComponent {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func,
};

Icon.defaultProps = {
  size: 24,
  color: 'black',
  type: '',
};
