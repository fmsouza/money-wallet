import React, { useLayoutEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useLocalization } from '~shared/intl';
import { makeStyles } from '~shared/styles';
import { Container } from '~shared/widgets';
import { Balance, TransactionItem } from '~modules/history/widgets';

import { DUMMY_TRANSACTIONS } from './dummy';

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

export const StatementsScreen = () => {
  const styles = useStyles();
  const loc = useLocalization();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: loc.t('statements.title'),
    });
  }, [loc, navigation]);

  return (
    <Container style={styles.container}>
      <FlatList
        style={styles.mainScrollContainer}
        data={DUMMY_TRANSACTIONS}
        renderItem={({ item }) => <TransactionItem key={item.id} tx={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Balance value={200.55} hideValue={false} />}
      />
    </Container>
  );
};

StatementsScreen.route = 'Statements';
