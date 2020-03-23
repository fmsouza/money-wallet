import React, { useLayoutEffect } from 'react';
import { Picker, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon, ListItem } from '~shared/widgets';
import { currencies, languages, useTheme } from '~shared/providers';
import { useLocale } from '~modules/settings/intl';

export const LocalizationScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const {
    getText,
    selectedCurrency,
    setCurrency,
    selectedLocale,
    setLocale,
  } = useLocale();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('localization.title'),
    });
  }, [getText, navigation]);

  const handleCurrencyChange = value => setCurrency(value);

  const handleLanguageChange = value => setLocale(value);

  const getCurrencyLabel = cur => `${cur.label} (${cur.symbol})`;

  const getIcon = (name, type) => (
    <Icon name={name} type={type} size={32} color={theme.colors.text} />
  );

  const pickerStyle = { height: 32, width: 128 };

  return (
    <Container>
      <ScrollView>
        <ListItem
          leading={getIcon('language', 'md')}
          title={getText('localization.items.language')}
          trailing={
            <Picker
              selectedValue={selectedLocale.type}
              onValueChange={handleLanguageChange}
              style={pickerStyle}>
              {languages.map(lang => (
                <Picker.Item
                  key={lang}
                  label={getText(`languages.${lang}`)}
                  value={lang}
                />
              ))}
            </Picker>
          }
        />
        <ListItem
          leading={getIcon('currency-usd')}
          title={getText('localization.items.currency')}
          subtitle={selectedCurrency.symbol}
          trailing={
            <Picker
              selectedValue={selectedCurrency.type}
              onValueChange={handleCurrencyChange}
              style={pickerStyle}>
              {currencies.map(cur => (
                <Picker.Item
                  key={cur}
                  label={getCurrencyLabel(getText(`currencies.${cur}`))}
                  value={cur}
                />
              ))}
            </Picker>
          }
        />
      </ScrollView>
    </Container>
  );
};

LocalizationScreen.route = 'Localization';
