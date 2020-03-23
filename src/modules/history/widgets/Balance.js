import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { useTheme, withProviders } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

import { useLocale } from '~modules/history/intl';
import { HistoryProvider, useGetBalance } from '~modules/history/state';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primaryDarker,
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
    color: theme.colors.lightText,
  },
  balance: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    color: theme.colors.lightText,
  },
  placeholder: {
    backgroundColor: theme.colors.lightText,
    width: 100,
    height: 20,
    borderRadius: 20,
  },
}));

export const Balance = withProviders([HistoryProvider], () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const [visible, setVisibility] = useState(false);
  const { getText, selectedCurrency } = useLocale();
  const { data: balance, updateBalance } = useGetBalance();

  const balanceLabel = `${selectedCurrency.symbol} ${balance.toFixed(2)}`;

  const handleToggleVisibility = () => {
    if (!visible) updateBalance();
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
          color={theme.colors.lightText}
        />
      </View>
    </View>
  );
});
