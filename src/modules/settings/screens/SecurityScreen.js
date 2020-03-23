import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '~shared/providers';
import { Container, Icon, ListItem } from '~shared/widgets';

import { useLocale } from '~modules/settings/intl';

export const SecurityScreen = () => {
  const { getText } = useLocale();
  const { theme } = useTheme();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('security.title'),
    });
  }, [getText, navigation]);

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  const getIcon = (name, type) => (
    <Icon name={name} type={type} size={32} color={theme.colors.text} />
  );

  return (
    <Container>
      <ScrollView>
        <ListItem
          leading={getIcon('fingerprint')}
          title={getText('security.items.fingerprint')}
          trailing={
            <Switch value={false} onValueChange={onHandleNotImplemented} />
          }
        />
      </ScrollView>
    </Container>
  );
};

SecurityScreen.route = 'Security';
