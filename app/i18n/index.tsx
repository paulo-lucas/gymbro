import { Platform, NativeModules } from 'react-native';
import { I18n } from 'i18n-js';
import { Translate } from '@app/entities/i18n';

import en from './translations/en-US';
import pt from './translations/pt-BR';

const i18n = new I18n({
  en,
  'pt-BR': pt,
});

const normalizeTranslate = {
  en_US: 'en',
  pt_BR: 'pt_BR',
  pt_US: 'pt_BR',
  en: 'en',
  pt: 'pt_BR',
};

const getLanguageByDevice = () => {
  return (
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier
  ) as keyof typeof normalizeTranslate;
};

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];

  const hasThisLanguage = i18n.translations.hasOwnProperty(translateNormalize);

  hasThisLanguage
    ? (i18n.locale = translateNormalize)
    : (i18n.defaultLocale = 'en');
};

setLanguageToI18n();

export const translate: Translate = (scope, options) => i18n.t(scope, options);
