import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useLocalization } from '~shared/intl';
import { Container, ListItem } from '~shared/widgets';

export const SettingsScreen = () => {
  const loc = useLocalization();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: loc.t('settings.title'),
    });
  }, [loc, navigation]);

  const handleDarkModeToggle = value => {};

  return (
    <Container>
      <ScrollView>
        <ListItem
          title="Localization"
          subtitle="Language & Currency"
          icon="language"
          iconType="md"
          onPress={() => {}}
        />
        <ListItem
          title="Notifications"
          subtitle="Configure your push notifications"
          icon="notifications"
          iconType="md"
          onPress={() => {}}
        />
        <ListItem
          title="Dark mode"
          subtitle="Toggle dark mode"
          icon="brightness-4"
          iconType="md"
          onToggle={handleDarkModeToggle}
        />
        <ListItem
          title="About"
          subtitle="About the app"
          icon="information"
          onPress={() => {}}
        />
      </ScrollView>
    </Container>
  );
};

SettingsScreen.route = 'Settings';
