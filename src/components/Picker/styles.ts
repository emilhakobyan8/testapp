import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ThemeType} from '@/constants/themes';

interface IStyles {
  centeredView: ViewStyle;
  header: ViewStyle;
  modalView: ViewStyle;
  openButton: ViewStyle;
  textStyle: TextStyle;
  modalText: TextStyle;
  listItem: ViewStyle;
  tickIcon: ImageStyle;
}

const createStyles = (appTheme?: ThemeType) =>
  StyleSheet.create<IStyles>({
    centeredView: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: appTheme?.componentsColor,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    modalView: {
      flex: 1,
      alignItems: 'center',
      elevation: 5,
      marginTop: 16,
      backgroundColor: appTheme?.containersColor,
    },
    openButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    textStyle: {
      textAlign: 'center',
      color: appTheme?.fontColor,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    listItem: {
      width: '100%',
      height: 40,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      borderBottomColor: appTheme?.borderColor,
    },
    tickIcon: {
      position: 'absolute',
      right: 16,
    },
  });

export default createStyles;
