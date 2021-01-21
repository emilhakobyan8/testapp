import React, {useContext, useEffect, useState} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  useLinking,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Scope, TranslateOptions} from 'i18n-js';

import {
  AuthScreen,
  MapScreen,
  Settings,
  CameraScreen,
  NewsScreen,
} from '@/screens';
import AppContext from '@/context/AppContext';
import Icon from '@/components/Icon';
import LocalizationContext from '@/context/LocalizationContext';

export type RootParamList = {
  mainStack: undefined;
};

const Tab = createBottomTabNavigator();

type IIcon = {
  focused: string;
  default: string;
};

interface IIconMapping {
  Auth: IIcon;
  News: IIcon;
  Map: IIcon;
  Camera: IIcon;
  Settings: IIcon;
}

const iconMapping: IIconMapping = {
  Auth: {
    focused: 'signInActive',
    default: 'signInInactive',
  },
  News: {
    focused: 'newsActive',
    default: 'newsInactive',
  },
  Map: {
    focused: 'mapActive',
    default: 'mapInactive',
  },
  Camera: {
    focused: 'cameraActive',
    default: 'cameraInactive',
  },
  Settings: {
    focused: 'settingsActive',
    default: 'settingsInactive',
  },
};

const renderAuthorizedScreens = (
  t: (scope: Scope, options?: TranslateOptions) => string,
) => {
  return (
    <>
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: t('news'),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: t('map'),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: t('camera'),
        }}
      />
    </>
  );
};

const renderUnauthorizedScreens = (
  t: (scope: Scope, options?: TranslateOptions) => string,
) => (
  <Tab.Screen
    name="Auth"
    component={AuthScreen}
    options={{
      tabBarLabel: t('auth'),
    }}
  />
);

const RootStack = () => {
  const {appTheme, isAuthorized} = useContext(AppContext);
  const {t} = useContext(LocalizationContext);

  return (
    <Tab.Navigator
      initialRouteName="Auth"
      tabBarOptions={{
        activeTintColor: appTheme?.activeTintColor,
        inactiveTintColor: appTheme?.inactiveTintColor,
        style: {
          backgroundColor: appTheme?.componentsColor,
          borderTopColor: appTheme?.containersColor,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const focusedIcon =
            appTheme && appTheme[iconMapping[route.name].focused];
          const defaultIcon =
            appTheme && appTheme[iconMapping[route.name].default];
          let iconName = focused ? focusedIcon : defaultIcon;
          return <Icon source={iconName} />;
        },
      })}>
      {!isAuthorized && renderUnauthorizedScreens(t)}
      {isAuthorized && renderAuthorizedScreens(t)}
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: t('settings'),
        }}
      />
    </Tab.Navigator>
  );
};

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props) => {
  const ref: React.Ref<any> = React.useRef();
  const {getInitialState} = useLinking(ref, {
    prefixes: ['testapp://'],
    config: {
      screens: {
        Map: 'map',
        Camera: 'camera',
        Auth: 'auth',
      },
    },
  });

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<any>();

  useEffect(() => {
    getInitialState().then((state) => {
      if (state !== undefined) {
        setInitialState(state);
      }
      setIsReady(true);
    });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }
  return (
    <NavigationContainer {...props} initialState={initialState} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
