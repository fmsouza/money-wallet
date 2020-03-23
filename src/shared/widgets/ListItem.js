import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import { makeStyles } from '~shared/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.padding,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    width: theme.maxWidth,
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightColumn: {
    paddingRight: theme.padding * 2,
  },
  leadingContainer: {
    marginRight: theme.margin,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: color(theme.colors.text)
      .lighten(0.9)
      .hex()
      .toString(),
  },
}));

export const ListItem = ({ leading, title, subtitle, onPress, trailing }) => {
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          {leading && <View style={styles.leadingContainer}>{leading}</View>}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
        {trailing && <View style={styles.rightColumn}>{trailing}</View>}
      </View>
    </TouchableWithoutFeedback>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onPress: PropTypes.func,
  leading: PropTypes.node,
  trailing: PropTypes.node,
};

ListItem.defaultProps = {
  subtitle: null,
  iconType: null,
  onPress: () => {},
  leading: null,
  trailing: null,
};
