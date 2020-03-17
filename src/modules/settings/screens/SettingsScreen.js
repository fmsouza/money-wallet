import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDarkMode } from '~shared/providers';
import { Container, Icon, ListItem } from '~shared/widgets';
import { useLocale } from '~modules/settings/intl';
import { AboutScreen } from '~modules/support/screens';

import { LocalizationScreen } from './LocalizationScreen';
import { SecurityScreen } from './SecurityScreen';

export const SettingsScreen = () => {
  const { darkMode, enableDarkMode } = useDarkMode();
  const { getText } = useLocale();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('settings.title'),
    });
  }, [getText, navigation]);

  const handleDarkModeToggle = value => enableDarkMode(value);

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  const getIcon = (name, type) => <Icon name={name} type={type} size={32} />;

  return (
    <Container>
      <ScrollView>
        <ListItem
          leading={getIcon('shield-key')}
          title={getText('settings.items.security.title')}
          subtitle={getText('settings.items.security.subtitle')}
          onPress={() => navigation.navigate(SecurityScreen.route)}
        />
        <ListItem
          leading={getIcon('language', 'md')}
          title={getText('settings.items.localization.title')}
          subtitle={getText('settings.items.localization.subtitle')}
          onPress={() => navigation.navigate(LocalizationScreen.route)}
        />
        <ListItem
          leading={getIcon('notifications', 'md')}
          title={getText('settings.items.notifications.title')}
          subtitle={getText('settings.items.notifications.subtitle')}
          onPress={onHandleNotImplemented}
        />
        <ListItem
          leading={getIcon('brightness-4', 'md')}
          title={getText('settings.items.darkMode.title')}
          subtitle={getText('settings.items.darkMode.subtitle')}
          trailing={
            <Switch value={darkMode} onValueChange={handleDarkModeToggle} />
          }
        />
        <ListItem
          leading={getIcon('information')}
          title={getText('settings.items.about.title')}
          subtitle={getText('settings.items.about.subtitle')}
          onPress={() => navigation.navigate(AboutScreen.route)}
        />
      </ScrollView>
    </Container>
  );
};

SettingsScreen.route = 'Settings';
