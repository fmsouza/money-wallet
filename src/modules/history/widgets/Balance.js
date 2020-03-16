import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '~shared/widgets';
import { makeStyles } from '~shared/styles';

import { useLocale } from '~modules/history/intl';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.border,
    height: 80,
    marginVertical: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flex: 1,
    height: '100%',
  },
  rightColumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
  },
  balance: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  placeholder: {
    backgroundColor: '#222222',
    width: 100,
    height: 24,
    borderRadius: 20,
  },
}));

export const Balance = ({ value, hideValue }) => {
  const styles = useStyles();
  const [visible, setVisibility] = useState(!hideValue);
  const { getText, selectedCurrency } = useLocale();

  const balanceLabel = `${selectedCurrency.symbol} ${value.toFixed(2)}`;

  const handleToggleVisibility = () => {
    setVisibility(v => !v);
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.title}>{getText('history.balance.label')}</Text>
        {visible && <Text style={styles.balance}>{balanceLabel}</Text>}
        {!visible && <View style={styles.placeholder} />}
      </View>
      <View style={styles.rightColumn}>
        <Icon.Button
          name={visible ? 'eye' : 'eye-off'}
          onPress={handleToggleVisibility}
        />
      </View>
    </View>
  );
};

Balance.propTypes = {
  value: PropTypes.number.isRequired,
  hideValue: PropTypes.bool,
};

Balance.defaultProps = {
  hideValue: true,
};
