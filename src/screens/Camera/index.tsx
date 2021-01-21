import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RNCamera} from 'react-native-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export const CameraScreen = () => (
  <View style={styles.container}>
    <RNCamera />
  </View>
);
