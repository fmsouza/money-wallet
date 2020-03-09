import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { makeStyles } from '~shared/styles';

const { height, width } = Dimensions.get('window');
const slideHeight = height * 0.4;
const slideWidth = width * 0.8;

const MARGIN = 8;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: slideHeight,
    backgroundColor: theme.colors.border,
    margin: MARGIN,
    width: slideWidth,
    padding: 16,
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
  title: {
    fontSize: 32,
  },
}));

export const SliderItem = ({ item }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

SliderItem.WIDTH = slideWidth + MARGIN * 2;

SliderItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
