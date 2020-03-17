import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { makeStyles } from '~shared/styles';
import { Container, Icon, ListItem } from '~shared/widgets';
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

  const getIcon = (name, type) => <Icon name={name} type={type} size={32} />;

  const bankName = 'National Bank';
  const bankNumber = '340';
  const accountNumber = '32455-3';
  const routingNumber = '0001';

  const onHandleShare = () =>
    Share.share({
      message: getText('profile.shareableAccountText', {
        bankName,
        bankNumber,
        accountNumber,
        routingNumber,
      }),
    });

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  return (
    <Container style={styles.container}>
      <ScrollView>
        <AccountDetails
          bankName={bankName}
          bankNumber={bankNumber}
          accountNumber={accountNumber}
          routingNumber={routingNumber}
        />
        <ListItem
          leading={getIcon('share', 'md')}
          title={getText('profile.shareAccount.title')}
          onPress={onHandleShare}
        />
        <ListItem
          leading={getIcon('file-table')}
          title={getText('profile.exportStatements.title')}
          onPress={onHandleNotImplemented}
        />
        <ListItem
          leading={getIcon('bank-remove')}
          title={getText('profile.resetAccount.title')}
          subtitle={getText('profile.resetAccount.subtitle')}
          onPress={onHandleNotImplemented}
        />
      </ScrollView>
    </Container>
  );
};

ProfileScreen.route = 'Profile';
