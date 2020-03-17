import React, { useLayoutEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useOnMount } from '~shared/hooks';
import { makeStyles } from '~shared/styles';
import { Container } from '~shared/widgets';
import { withProviders } from '~shared/providers';

import { useLocale } from '~modules/history/intl';
import { HistoryProvider, useHistory } from '~modules/history/state';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}));

export const InsightsScreen = withProviders([HistoryProvider], () => {
  const styles = useStyles();
  const { getText } = useLocale();
  const navigation = useNavigation();
  const { data: statements, loading, error, getHistory } = useHistory();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('insights.title'),
    });
  }, [getText, navigation]);

  useOnMount(() => getHistory());

  const refreshControl = (
    <RefreshControl refreshing={loading} onRefresh={getHistory} />
  );

  return (
    <Container style={styles.container}>
      <ScrollView refreshControl={refreshControl}></ScrollView>
    </Container>
  );
});

InsightsScreen.route = 'Insights';
