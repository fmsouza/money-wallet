import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ListItem } from '~shared/widgets';
import { useLocale } from '~modules/settings/intl';

export const SettingsScreen = () => {
  const { getText } = useLocale();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('settings.title'),
    });
  }, [getText, navigation]);

  const handleDarkModeToggle = value => {};

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  return (
    <Container>
      <ScrollView>
        <ListItem
          title={getText('settings.items.security.title')}
          subtitle={getText('settings.items.security.subtitle')}
          icon="shield-key"
          onPress={onHandleNotImplemented}
        />
        <ListItem
          title={getText('settings.items.localization.title')}
          subtitle={getText('settings.items.localization.subtitle')}
          icon="language"
          iconType="md"
          onPress={onHandleNotImplemented}
        />
        <ListItem
          title={getText('settings.items.notifications.title')}
          subtitle={getText('settings.items.notifications.subtitle')}
          icon="notifications"
          iconType="md"
          onPress={onHandleNotImplemented}
        />
        <ListItem
          title={getText('settings.items.darkMode.title')}
          subtitle={getText('settings.items.darkMode.subtitle')}
          icon="brightness-4"
          iconType="md"
          onToggle={handleDarkModeToggle}
        />
        <ListItem
          title={getText('settings.items.about.title')}
          subtitle={getText('settings.items.about.subtitle')}
          icon="information"
          onPress={onHandleNotImplemented}
        />
      </ScrollView>
    </Container>
  );
};

SettingsScreen.route = 'Settings';
