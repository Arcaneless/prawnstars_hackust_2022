import 'expo-dev-client';
import React, {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {AppNavigator} from './src/app';
import {configureDesignSystem} from './src/utils/designSystem';

LogBox.ignoreLogs(['Require']);

export default (): JSX.Element => {
  const [ready, setReady] = useState(false);

  const startApp = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync();

    configureDesignSystem();

    setReady(true);
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    startApp();
  }, [startApp]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};
