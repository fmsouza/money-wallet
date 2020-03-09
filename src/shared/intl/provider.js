import React, { useContext, useMemo, useState } from 'react';
import i18n from 'i18n-js';
import * as translations from './translations';

i18n.fallbacks = true;

i18n.translations = translations;

const LocalizationContext = React.createContext();

export const LocalizationProvider = props => {
  const [locale, setLocale] = useState(i18n.locale);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LocalizationContext.Provider value={localizationContext} {...props} />
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
