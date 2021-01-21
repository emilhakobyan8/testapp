import React, {useContext, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PickerView} from '@/components';
import {options, ThemeKeys} from '@/constants/themes';
import AppContext from '@/context/AppContext';
import LocalizationContext from '@/context/LocalizationContext';

import createStyles from './styles';

export const Settings = () => {
  const {
    handleChangeAppTheme,
    appTheme,
    isAuthorized,
    setAuthState,
  } = useContext(AppContext);
  const {t, handleLocalizationChange} = useContext(LocalizationContext);
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  const onChangeTheme = (themeKey: ThemeKeys) => () => {
    handleChangeAppTheme && handleChangeAppTheme(themeKey);
  };

  const changeLocale = (locale: string) => {
    handleLocalizationChange && handleLocalizationChange(locale);
  };

  const signOut = () => {
    setAuthState && setAuthState(false);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.themesContainer}>
        {options.map(({key}) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.modalButton,
              key === appTheme?.key ? styles.selectedButton : {},
            ]}
            activeOpacity={0.7}
            onPress={onChangeTheme(key)}>
            <Text style={styles.regularText}>{t && t(key)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.languageSelect}>
        <Text style={styles.regularText}>{t && t('language')}</Text>
        <PickerView defaultValue="english" onChange={changeLocale} />
      </View>
      {isAuthorized && (
        <TouchableOpacity
          style={styles.signOutButton}
          activeOpacity={0.7}
          onPress={signOut}>
          <Text style={styles.signOutText}>{t && t('signOut')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
