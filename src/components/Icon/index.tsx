import React, {FunctionComponent} from 'react';
import {Image, ImageRequireSource, ImageStyle} from 'react-native';

interface IIcon {
  style?: ImageStyle;
  source?: ImageRequireSource;
}

const defaultStyles = {
  height: 20,
  width: 18,
};

const Icon: FunctionComponent<IIcon> = (props) =>
  props.source ? (
    <Image
      source={props.source}
      style={[defaultStyles, props.style]}
      resizeMode="contain"
    />
  ) : null;

export default Icon;
