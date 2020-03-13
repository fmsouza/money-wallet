import React, { useContext, useMemo, useState } from 'react';
import { Platform, NativeModules } from 'react-native';
import merge from 'lodash/merge';
import i18n from 'i18n-js';

export const deviceLocale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

i18n.fallbacks = true;
i18n.translations = {};
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
  const [locale, setLocale] = useState(i18n.locale);
  const localizationContext = useMemo(() => {
    const getText = (scope, options) => i18n.t(scope, { locale, ...options });
    const addTranslations = translations => {
      i18n.translations = merge({ ...i18n.translations }, { ...translations });
    };
    return { addTranslations, getText, setLocale, locale };
  }, [locale]);

  return (
    <LocalizationContext.Provider value={localizationContext} {...props} />
  );
};
