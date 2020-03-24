import React from 'react';
import { Text, View } from 'react-native';
import { isThisMonth } from 'date-fns';

import { useOnMount } from '~shared/hooks';
import { useTheme, withProviders } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

import { useLocale } from '~modules/history/intl';
import { HistoryProvider, useHistory } from '~modules/history/state';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    padding: theme.padding,
  },
  middle: {
    paddingHorizontal: theme.padding * 2,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: theme.padding * 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: theme.colors.border,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
  },
  description: {
    color: theme.colors.text,
    fontSize: 32,
  },
  action: {
    color: theme.colors.text,
    fontSize: 18,
  },
}));

export const MonthExpenses = withProviders([HistoryProvider], () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { loading, data: statements, getHistory } = useHistory();
  const { selectedCurrency } = useLocale();

  useOnMount(() => getHistory());

  const expenses = statements
    .filter(tx => isThisMonth(new Date(tx.timestamp)))
    .reduce((acc, tx) => acc + Number(tx.amount), 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Month expenses</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}>
          {selectedCurrency.symbol} {expenses.toFixed(2)}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.action}>View expenses</Text>
        <Icon name="chevron-right" size={24} color={theme.colors.text} />
      </View>
    </View>
  );
});
