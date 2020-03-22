import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export const Space = ({ height }) => <View style={{ height }} />;

Space.propTypes = {
  height: PropTypes.number.isRequired,
};
