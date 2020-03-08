import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from './Icon';

export const IconButton = ({ name, size, color, type, onPress, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      <Icon name={name} size={size} color={color} />
    </TouchableWithoutFeedback>
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string,
};

IconButton.defaultProps = {
  size: 24,
  color: 'black',
  type: '',
};
