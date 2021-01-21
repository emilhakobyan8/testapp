import React from 'react';
import {Scope, TranslateOptions} from 'i18n-js';

interface ILocalizationContext {
  t?: (scope: Scope, options?: TranslateOptions) => string;
  locale?: string | null;
  setLocale?: React.Dispatch<React.SetStateAction<string | null>>;
  handleLocalizationChange?: (newLocale: string) => Promise<null | undefined>;
}
const LocalizationContext = React.createContext<ILocalizationContext>({});

export default LocalizationContext;
