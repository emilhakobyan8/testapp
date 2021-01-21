import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ThemeType} from '@/constants/themes';

interface IStyles {
  container: ViewStyle;
  welcomeText: TextStyle;
  authorizeButton: ViewStyle;
  signInButtonLabel: TextStyle;
}

const createStyles = (appTheme?: ThemeType) =>
  StyleSheet.create<IStyles>({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: appTheme?.containersColor,
      justifyContent: 'center',
    },
    welcomeText: {
      fontSize: 32,
      color: appTheme?.fontColor,
    },
    authorizeButton: {
      backgroundColor: appTheme?.componentsColor,
      paddingHorizontal: 64,
      paddingVertical: 12,
      borderRadius: 8,
      shadowColor: appTheme?.componentsColor,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      marginTop: 16,
    },
    signInButtonLabel: {
      fontSize: 22,
      color: appTheme?.fontColor,
    },
  });

export default createStyles;
