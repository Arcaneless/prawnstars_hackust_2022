import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {RootNavigator} from './screens';
import {getThemeStatusBarBGColor, getThemeStatusBarStyle} from './utils/designSystem';

export const AppNavigator = (): JSX.Element => {
  useColorScheme();

  return (
    <>
      <StatusBar barStyle={getThemeStatusBarStyle()} backgroundColor={getThemeStatusBarBGColor()} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};
