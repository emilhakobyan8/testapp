import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ThemeType} from '@/constants/themes';

interface IStyles {
  screenContainer: ViewStyle;
  themesContainer: ViewStyle;
  modalButton: ViewStyle;
  selectedButton: ViewStyle;
  regularText: TextStyle;
  languageSelect: ViewStyle;
  signOutButton: ViewStyle;
  signOutText: TextStyle;
}

const createStyles = (appTheme?: ThemeType) =>
  StyleSheet.create<IStyles>({
    screenContainer: {
      flex: 1,
      backgroundColor: appTheme?.containersColor,
    },
    themesContainer: {
      marginTop: 32,
      height: 45,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: appTheme?.componentsColor,
    },
    modalButton: {
      height: 43,
      width: '33%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      backgroundColor: appTheme?.componentsColor,
    },
    selectedButton: {
      backgroundColor: appTheme?.containersColor,
    },
    regularText: {
      color: appTheme?.fontColor,
    },
    languageSelect: {
      height: 43,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      width: '100%',
      marginTop: 16,
      backgroundColor: appTheme?.componentsColor,
    },
    signOutButton: {
      width: '100%',
      height: 43,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
      backgroundColor: appTheme?.componentsColor,
    },
    signOutText: {
      color: '#853131',
      fontWeight: 'bold',
    },
  });

export default createStyles;
