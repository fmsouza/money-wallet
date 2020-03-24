import React, { useLayoutEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useOnMount } from '~shared/hooks';
import { makeStyles } from '~shared/styles';
import { Container } from '~shared/widgets';
import { withProviders } from '~shared/providers';

import { useLocale } from '~modules/history/intl';
import { HistoryProvider, useHistory } from '~modules/history/state';
import { Balance, TransactionItem } from '~modules/history/widgets';
import { isBefore } from 'date-fns';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.background,
  },
  mainScrollContainer: {
    width: '100%',
  },
}));

export const StatementsScreen = withProviders([HistoryProvider], () => {
  const styles = useStyles();
  const { getText } = useLocale();
  const navigation = useNavigation();
  const { data: statements, loading, error, getHistory } = useHistory();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('history.title'),
    });
  }, [getText, navigation]);

  useOnMount(() => getHistory());

  const refreshControl = (
    <RefreshControl refreshing={loading} onRefresh={getHistory} />
  );

  const sortedStatements = statements.sort((st1, st2) =>
    isBefore(new Date(st2.timestamp), new Date(st1.timestamp)),
  );

  return (
    <Container style={styles.container}>
      <FlatList
        style={styles.mainScrollContainer}
        data={sortedStatements}
        refreshControl={refreshControl}
        renderItem={({ item }) => <TransactionItem key={item.id} tx={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Balance />}
      />
    </Container>
  );
});

StatementsScreen.route = 'Statements';
