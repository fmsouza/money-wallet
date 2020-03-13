import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Text, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

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
  iconContainer: {
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

export const ListItem = ({
  title,
  subtitle,
  icon,
  iconType,
  onPress,
  onToggle,
  toggleValue,
}) => {
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          {icon && (
            <View style={styles.iconContainer}>
              <Icon name={icon} type={iconType} size={32} />
            </View>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
        {onToggle && (
          <View style={styles.rightColumn}>
            <Switch value={toggleValue} onValueChange={onToggle} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  iconType: PropTypes.string,
  onPress: PropTypes.func,
  onToggle: PropTypes.func,
  toggleValue: PropTypes.bool,
};

ListItem.defaultProps = {
  onPress: () => {},
  onToggle: null,
  toggleValue: false,
};
