import React from 'react';
import {ImageRequireSource} from 'react-native';
import {ThemeKeys} from '@/constants/themes';

interface IAppContext {
  appTheme?: {
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
  handleChangeAppTheme?: (themeKey: ThemeKeys) => void;
  isAuthorized?: boolean;
  setAuthState?: (isAuthorized: boolean) => void;
  locale?: string | null;
  currentLanguage?: string;
}

export default React.createContext<IAppContext>({});
