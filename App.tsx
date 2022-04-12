import 'expo-dev-client';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppNavigator } from './src/app';
import { configureDesignSystem } from './src/utils/designSystem';

LogBox.ignoreLogs(['Require']);
LogBox.ignoreAllLogs();

export const FlagContext = createContext({ flag: false, setFlag: (flag: boolean) => {} });

export default (): JSX.Element => {
  const [ready, setReady] = useState(false);
  const [flag, setFlag] = useState(false);

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
    <FlagContext.Provider value={{ flag, setFlag }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </FlagContext.Provider>
  );
};
