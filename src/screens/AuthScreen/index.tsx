import React, {useContext, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import AppContext from '@/context/AppContext';
import LocalizationContext from '@/context/LocalizationContext';

import createStyles from './styles';

export const AuthScreen = () => {
  const {appTheme, setAuthState} = useContext(AppContext);

  const {t} = useContext(LocalizationContext);

  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  const authorize = () => {
    setAuthState && setAuthState(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{t && t('welcome')}</Text>
      <TouchableOpacity
        onPress={authorize}
        activeOpacity={0.7}
        style={styles.authorizeButton}>
        <Text style={styles.signInButtonLabel}>{t && t('authorize')}</Text>
      </TouchableOpacity>
    </View>
  );
};
