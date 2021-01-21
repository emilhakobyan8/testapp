import {I18nManager} from 'react-native';
import i18n, {TranslateOptions} from 'i18n-js';
import memoize from 'lodash.memoize';

import en from './en';
import ar from './ar';
export const DEFAULT_LANGUAGE = 'en';

export const translate = memoize(
  (key: string, config: TranslateOptions) => i18n.t(key, config),
  (key: string, config: TranslateOptions) =>
    config ? key + JSON.stringify(config) : key,
);

export const t = translate;

i18n.fallbacks = true;
i18n.defaultLocale = DEFAULT_LANGUAGE;
i18n.locale = DEFAULT_LANGUAGE;
i18n.translations = {en, ar};

export const setI18nConfig = (codeLang: string) => {
  // fallback if no available language fits
  const fallback = {languageTag: DEFAULT_LANGUAGE, isRTL: false};
  const lang = codeLang
    ? {languageTag: codeLang, isRTL: codeLang === 'ar'}
    : null;

  const {languageTag, isRTL} = lang ? lang : fallback;
  // clear translation cache
  translate?.cache?.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.locale = languageTag;

  return languageTag;
};
