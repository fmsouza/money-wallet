import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ListItem } from '~shared/widgets';
import { useLocale } from '~modules/settings/intl';

export const LocalizationScreen = () => {
  const navigation = useNavigation();
  const { getText, setLocale } = useLocale();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('localization.title'),
    });
  }, [getText, navigation]);

  return (
    <Container>
      <ScrollView>
        <ListItem
          title={getText('localization.items.language.title')}
          icon="language"
          iconType="md"
        />
        <ListItem
          title={getText('localization.items.currency.title')}
          icon="currency-usd"
        />
      </ScrollView>
    </Container>
  );
};

LocalizationScreen.route = 'Localization';
