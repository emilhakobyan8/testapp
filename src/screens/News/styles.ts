import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ThemeType} from '@/constants/themes';

interface IStyles {
  header: ViewStyle;
  screenTitle: TextStyle;
  contentContainer: ViewStyle;
  scrollView: ViewStyle;
}

const createStyles = (appTheme?: ThemeType) =>
  StyleSheet.create<IStyles>({
    header: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: appTheme?.componentsColor,
    },
    screenTitle: {
      fontSize: 22,
      color: appTheme?.fontColor,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: appTheme?.containersColor,
    },
    scrollView: {
      paddingHorizontal: 16,
      backgroundColor: appTheme?.containersColor,
    },
  });

export default createStyles;
