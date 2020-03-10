import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    width: theme.maxWidth,
    paddingLeft: theme.padding,
    paddingRight: 24,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
  },
  title: {
    fontSize: 16,
  },
  descriptionContainer: {},
  description: {
    padding: theme.padding * 2,
    paddingBottom: theme.padding * 4,
  },
}));

export const Expandable = ({ title, description }) => {
  const [visible, setVisible] = useState(false);
  const styles = useStyles();

  const handleHeaderPress = () => {
    setVisible(v => !v);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleHeaderPress}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Icon name={visible ? 'chevron-up' : 'chevron-down'} />
        </View>
      </TouchableWithoutFeedback>
      {visible && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
};

Expandable.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
