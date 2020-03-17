import React, { useLayoutEffect, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useOnMount } from '~shared/hooks';
import { makeStyles } from '~shared/styles';
import { Container } from '~shared/widgets';
import { withProviders } from '~shared/providers';

import { useLocale } from '~modules/history/intl';
import { HistoryProvider, useHistory } from '~modules/history/state';
import { Balance, TransactionItem } from '~modules/history/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  mainScrollContainer: {
    width: '100%',
  },
}));

export const StatementsScreen = withProviders([HistoryProvider], () => {
  const styles = useStyles();
  const { getText } = useLocale();
  const navigation = useNavigation();
  const { data, loading, error, getHistory } = useHistory();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('history.title'),
    });
  }, [getText, navigation]);

  useOnMount(() => getHistory());

  const refreshControl = (
    <RefreshControl refreshing={loading} onRefresh={getHistory} />
  );

  return (
    <Container style={styles.container}>
      <FlatList
        style={styles.mainScrollContainer}
        data={data}
        refreshControl={refreshControl}
        renderItem={({ item }) => <TransactionItem key={item.id} tx={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Balance value={200.55} hideValue={false} />}
      />
    </Container>
  );
});

StatementsScreen.route = 'Statements';
