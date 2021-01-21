import {ThemeType} from '../../constants/themes';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IStyles {
  cardContainer: ViewStyle;
  cardImage: ImageStyle;
  cardInfo: ViewStyle;
  title: TextStyle;
  publishDate: TextStyle;
}

const createStyles = (appTheme?: ThemeType) =>
  StyleSheet.create<IStyles>({
    cardContainer: {
      height: 350,
      marginTop: 8,
    },
    cardImage: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      width: '100%',
      height: 280,
    },
    cardInfo: {
      height: 70,
      width: '100%',
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomLeftRadius: 8,
      borderBottomEndRadius: 8,
      backgroundColor: appTheme?.componentsColor,
    },
    title: {
      color: appTheme?.fontColor,
    },
    publishDate: {
      opacity: 0.6,
      position: 'absolute',
      right: 8,
      bottom: 8,
      color: appTheme?.fontColor,
    },
  });

export default createStyles;
