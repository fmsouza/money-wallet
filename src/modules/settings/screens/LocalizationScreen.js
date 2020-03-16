import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon, ListItem } from '~shared/widgets';
import { useLocale } from '~modules/settings/intl';

export const LocalizationScreen = () => {
  const navigation = useNavigation();
  const { getText, setLocale } = useLocale();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('localization.title'),
    });
  }, [getText, navigation]);

  const getIcon = (name, type) => <Icon name={name} type={type} size={32} />;

  return (
    <Container>
      <ScrollView>
        <ListItem
          leading={getIcon('language', 'md')}
          title={getText('localization.items.language.title')}
        />
        <ListItem
          leading={getIcon('currency-usd')}
          title={getText('localization.items.currency.title')}
        />
      </ScrollView>
    </Container>
  );
};

LocalizationScreen.route = 'Localization';
