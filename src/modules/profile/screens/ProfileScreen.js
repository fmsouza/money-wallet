import React, { useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useLocalization } from '~shared/intl';
import { makeStyles } from '~shared/styles';
import { Container, ListItem } from '~shared/widgets';

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
  const loc = useLocalization();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: loc.t('profile.title'),
    });
  }, [loc, navigation]);

  return (
    <Container style={styles.container}>
      <ScrollView>
        <Text style={styles.greeting}>What do you need?</Text>
        <ListItem
          title="Export statements"
          icon="file-table"
          onPress={() => {}}
        />
        <ListItem
          title="Reset account"
          subtitle="Clear all the memory"
          icon="bank-remove"
          onPress={() => {}}
        />
      </ScrollView>
    </Container>
  );
};

ProfileScreen.route = 'Profile';
