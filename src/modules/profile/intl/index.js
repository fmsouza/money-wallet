import { useLocale as useSharedLocale } from '~shared/intl';
import en from './en';
import pt from './pt';

const translations = { en, pt };

export const useLocale = () => {
  return useSharedLocale(translations);
};
