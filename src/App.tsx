import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, {Scope, TranslateOptions} from 'i18n-js';

import themes, {ThemeKeys} from './constants/themes';
import {DEFAULT_LANGUAGE, setI18nConfig} from './locales/i18n';
import LocalizationContext from './context/LocalizationContext';
import {RootNavigator} from './navigation';
import AppContext from './context/AppContext';

const App = () => {
  const [appTheme, setAppTheme] = useState(themes.light);

  const [locale, setLocale] = useState<string | null>(DEFAULT_LANGUAGE);
  const [isAuthorized, setAuthState] = useState(false);

  const handleLocalizationChange = useCallback(
    async (newLocale: string) => {
      if (!newLocale) {
        return null;
      }
      await AsyncStorage.setItem('locale', newLocale);
      const newSetLocale = setI18nConfig(newLocale);
      setLocale(newSetLocale);
      if (newLocale !== locale) {
        RNRestart.Restart();
      }
    },
    [locale],
  );

  const localizationContext = useMemo(
    () => ({
      t: (scope: Scope, options: TranslateOptions) =>
        i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
      handleLocalizationChange,
    }),
    [locale, handleLocalizationChange],
  );

  const getLocale = useCallback(async () => {
    const storedLocale = await AsyncStorage.getItem('locale');
    setLocale(storedLocale);
  }, []);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  const handleChangeAppTheme = (themeKey: ThemeKeys) => {
    setAppTheme(themes[themeKey]);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppContext.Provider
        value={{
          appTheme,
          handleChangeAppTheme,
          isAuthorized,
          setAuthState,
          locale,
        }}>
        <LocalizationContext.Provider value={localizationContext}>
          <SafeAreaView
            style={[
              styles.container,
              {backgroundColor: appTheme.componentsColor},
            ]}>
            <RootNavigator />
          </SafeAreaView>
        </LocalizationContext.Provider>
      </AppContext.Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
