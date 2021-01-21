import React, {useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';

import {RNCamera} from 'react-native-camera';
import styles from './styles';

export const CameraScreen = () => {
  const cameraRef = useRef(null);
  const takePhoto = async () => {
    const {onTakePhoto} = this.props;
    const options = {
      quality: 0.5,
      base64: true,
      width: 300,
      height: 300,
    };
    const data = await this.camera.takePictureAsync(options);
    onTakePhoto(data.base64);
  };

  return (
    <View style={styles.container}>
      <RNCamera ref={cameraRef} style={styles.preview} />
      <View style={styles.bottomButtons}>
        <TouchableOpacity onPress={takePhoto} style={styles.takePictureButton}>
          <View style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
