import {ImageRequireSource} from 'react-native';
import {icons} from '@/assets';

export type ThemeType = {
  componentsColor: string;
  fontColor: string;
  containersColor: string;
  activeTintColor: string;
  inactiveTintColor: string;
  borderColor: string;
  tickIcon: ImageRequireSource;
  signInActive: ImageRequireSource;
  signInInactive: ImageRequireSource;
  newsActive: ImageRequireSource;
  newsInactive: ImageRequireSource;
  mapActive: ImageRequireSource;
  mapInactive: ImageRequireSource;
  cameraActive: ImageRequireSource;
  cameraInactive: ImageRequireSource;
  settingsActive: ImageRequireSource;
  settingsInactive: ImageRequireSource;
  key: string;
  name: string;
};

interface IThemes {
  light: ThemeType;
  dark: ThemeType;
  green: ThemeType;
}

export type ThemeKeys = 'light' | 'dark' | 'green';

const themes: IThemes = {
  light: {
    componentsColor: '#1ca9c9',
    fontColor: '#0f1226',
    containersColor: '#dfe0eb',
    activeTintColor: '#000',
    inactiveTintColor: '#ffffff',
    borderColor: '#838383',
    tickIcon: icons.tick,
    signInActive: icons.signInBlack,
    signInInactive: icons.signIn,
    mapActive: icons.mapBlack,
    mapInactive: icons.map,
    newsActive: icons.newsBlack,
    newsInactive: icons.news,
    cameraActive: icons.cameraBlack,
    cameraInactive: icons.camera,
    settingsActive: icons.settingsBlack,
    settingsInactive: icons.settings,
    key: 'light',
    name: 'Light',
  },
  dark: {
    componentsColor: '#0f1226',
    fontColor: '#fff',
    containersColor: '#20264f',
    activeTintColor: '#fff',
    inactiveTintColor: '#6d6b6b',
    borderColor: '#838383',
    tickIcon: icons.tickGray,
    signInActive: icons.signIn,
    signInInactive: icons.signInBlack,
    newsActive: icons.news,
    newsInactive: icons.newsBlack,
    mapActive: icons.map,
    mapInactive: icons.mapBlack,
    cameraActive: icons.camera,
    cameraInactive: icons.cameraBlack,
    settingsActive: icons.settings,
    settingsInactive: icons.settingsBlack,
    key: 'dark',
    name: 'Dark',
  },
  green: {
    componentsColor: '#4e5850',
    fontColor: '#ebebe3',
    containersColor: '#99a99e',
    activeTintColor: '#fff',
    inactiveTintColor: '#999999',
    borderColor: '#838383',
    tickIcon: icons.tickGray,
    signInActive: icons.signInBlack,
    signInInactive: icons.signIn,
    newsActive: icons.newsBlack,
    newsInactive: icons.news,
    mapActive: icons.mapBlack,
    mapInactive: icons.map,
    cameraActive: icons.cameraBlack,
    cameraInactive: icons.camera,
    settingsActive: icons.settingsBlack,
    settingsInactive: icons.settings,
    key: 'green',
    name: 'Green',
  },
};

const themeKeys: string[] = Object.keys(themes);

interface IOption {
  label: string;
  key: ThemeKeys;
}

export const options: IOption[] = themeKeys.map<IOption>((item: ThemeKeys) => ({
  label: themes[item].name,
  key: item,
}));

export default themes;
