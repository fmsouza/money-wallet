import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useLocalization } from '~shared/intl';
import { makeStyles } from '~shared/styles';
import { Container } from '~shared/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}));

export const SettingsScreen = () => {
  const styles = useStyles();
  const loc = useLocalization();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: loc.t('settings.title'),
    });
  }, [loc, navigation]);

  return (
    <Container style={styles.container}>
      <ScrollView />
    </Container>
  );
};

SettingsScreen.route = 'Settings';
