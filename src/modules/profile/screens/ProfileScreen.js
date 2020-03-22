import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useOnMount } from '~shared/hooks';
import { withProviders } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Container, Icon, ListItem } from '~shared/widgets';

import { useLocale } from '~modules/profile/intl';
import { ProfileProvider, useProfile } from '~modules/profile/state';
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

export const ProfileScreen = withProviders([ProfileProvider], () => {
  const styles = useStyles();
  const { getText } = useLocale();
  const navigation = useNavigation();
  const { data: profile, loading, error, getProfile } = useProfile();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('profile.title'),
    });
  }, [getText, navigation]);

  useOnMount(() => getProfile());

  const getIcon = (name, type) => <Icon name={name} type={type} size={32} />;

  const onHandleShare = () =>
    Share.share({
      message: getText('profile.shareableAccountText', {
        bankName: profile.bankName,
        bankNumber: profile.bankNumber,
        accountNumber: profile.accountNumber,
        routingNumber: profile.routingNumber,
      }),
    });

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  return (
    <Container style={styles.container}>
      <ScrollView>
        <AccountDetails
          bankName={profile.bankName}
          bankNumber={profile.bankNumber}
          accountNumber={profile.accountNumber}
          routingNumber={profile.routingNumber}
        />
        <ListItem
          leading={getIcon('share', 'md')}
          title={getText('profile.shareAccount.title')}
          onPress={onHandleShare}
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
});

ProfileScreen.route = 'Profile';
