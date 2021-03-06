import React, { useContext, useMemo, useState } from 'react';
import { Platform, NativeModules } from 'react-native';
import get from 'lodash/get';
import merge from 'lodash/merge';
import i18n from 'i18n-js';
import defaultTranslations from './translations';

const DEFAULT_CURRENCY = 'usd';

const deviceLocale =
  Platform.OS === 'ios'
    ? get(
        NativeModules,
        ['SettingsManager', 'settings', 'AppleLocale'],
        null,
      ) ||
      get(
        NativeModules,
        ['SettingsManager', 'settings', 'AppleLocale', 0],
        'en',
      ) //iOS 13
    : get(NativeModules, ['I18nManager', 'localeIdentifier'], 'en');

i18n.fallbacks = true;
i18n.translations = defaultTranslations;
i18n.defaultLocale = deviceLocale;

const LocalizationContext = React.createContext();

export const useLocale = translations => {
  const context = useContext(LocalizationContext);
  if (translations) {
    context.addTranslations(translations);
  }
  return context;
};

export const LocalizationProvider = ({ ...props }) => {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [locale, setLocale] = useState(i18n.locale);
  const localizationContext = useMemo(() => {
    const getText = (scope, options) => i18n.t(scope, { locale, ...options });
    const addTranslations = translations => {
      i18n.translations = merge({ ...i18n.translations }, { ...translations });
    };

    const selectedLocale = {
      type: locale,
      label: getText(`currencies.${locale}`),
    };

    const selectedCurrency = {
      type: currency,
      ...getText(`currencies.${currency}`),
    };

    return {
      addTranslations,
      selectedCurrency,
      getText,
      setCurrency,
      setLocale,
      selectedLocale,
    };
  }, [currency, locale]);

  return (
    <LocalizationContext.Provider value={localizationContext} {...props} />
  );
};
