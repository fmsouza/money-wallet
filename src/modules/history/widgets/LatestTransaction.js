import React from 'react';
import { Text, View } from 'react-native';
import { formatDistanceToNow } from 'date-fns';

import { useOnMount } from '~shared/hooks';
import { useTheme, withProviders } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

import { HistoryProvider, useHistory } from '~modules/history/state';
import { getIconName } from '~modules/history/utils';

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
    justifyContent: 'space-between',
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
    fontSize: 24,
  },
  timestamp: {
    color: theme.colors.text,
    fontSize: 16,
  },
  amount: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 20,
  },
}));

export const LatestTransaction = withProviders([HistoryProvider], () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { loading, data: statements, getHistory } = useHistory();

  useOnMount(() => getHistory());

  if (statements.length === 0) return null;

  const tx = statements[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Latest transaction</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}>{tx.label}</Text>
        <Text style={styles.timestamp}>
          {formatDistanceToNow(new Date(tx.timestamp))}
        </Text>
      </View>
      <View style={styles.footer}>
        <Icon
          name={getIconName(tx.category)}
          size={24}
          color={theme.colors.text}
          type="md"
        />
        <Text style={styles.amount}>{tx.amount}</Text>
      </View>
    </View>
  );
});
