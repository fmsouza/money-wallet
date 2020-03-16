import React, { useLayoutEffect } from 'react';
import { Picker, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon, ListItem } from '~shared/widgets';
import { useLocale } from '~modules/settings/intl';

export const LocalizationScreen = () => {
  const navigation = useNavigation();
  const { getText, locale, setLocale } = useLocale();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('localization.title'),
    });
  }, [getText, navigation]);

  const handleLanguageChange = value => setLocale(value);

  const getIcon = (name, type) => <Icon name={name} type={type} size={32} />;

  const pickerStyle = { height: 32, width: 128 };

  const languages = getText('localization.items.language.options');

  return (
    <Container>
      <ScrollView>
        <ListItem
          leading={getIcon('language', 'md')}
          title={getText('localization.items.language.title')}
          trailing={
            <Picker
              selectedValue={locale}
              onValueChange={handleLanguageChange}
              style={pickerStyle}>
              {languages.map(({ label, value }) => (
                <Picker.Item key={value} label={label} value={value} />
              ))}
            </Picker>
          }
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
