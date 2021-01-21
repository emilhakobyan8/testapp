import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomButtons: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  takePictureButton: {
    marginBottom: 10,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 4,
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  buttonIcon: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
});

export default styles;
