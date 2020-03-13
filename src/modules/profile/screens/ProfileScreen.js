import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { makeStyles } from '~shared/styles';
import { Container, ListItem } from '~shared/widgets';
import { useLocale } from '~modules/profile/intl';
import { AccountDetails } from '~modules/profile/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  greeting: {
    fontSize: 24,
    padding: theme.padding,
  },
}));

export const ProfileScreen = () => {
  const styles = useStyles();
  const { getText } = useLocale();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('profile.title'),
    });
  }, [getText, navigation]);

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  return (
    <Container style={styles.container}>
      <ScrollView>
        <AccountDetails
          bankName="National Bank"
          bankNumber="340"
          accountNumber="32455-3"
          routingNumber="0001"
        />
        <ListItem
          title="Share account details"
          icon="share"
          iconType="md"
          onPress={onHandleNotImplemented}
        />
        <ListItem
          title="Export statements"
          icon="file-table"
          onPress={onHandleNotImplemented}
        />
        <ListItem
          title="Reset account"
          subtitle="Clear all the memory"
          icon="bank-remove"
          onPress={onHandleNotImplemented}
        />
      </ScrollView>
    </Container>
  );
};

ProfileScreen.route = 'Profile';
