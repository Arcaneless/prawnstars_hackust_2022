import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';
import {GetStarted} from './GetStarted';
import {ShopBasicInfo} from './ShopBasicInfo';

// Describe your screens here
export type Tabs = 'Main' | 'WIP' | 'Settings';
export type Screen = 'GetStarted' | 'ShopBasicInfo';

export type ModalProps = {
  ExampleModal: undefined;
};
export type ScreenProps = {
  Main: undefined;
  Example: ExampleScreenProps;
  Settings: undefined;
} & ModalProps;

type BaseScreenInfo = {
  name: string;
  component: React.FC<any>;
  // component: React.FC<NativeStackScreenProps<ScreenProps, Screen>>; // idk why it doesn't work
};

type ScreenInfo = BaseScreenInfo & {
  options: () => StackNavigationOptions;
};
type ScreenLayouts = {
  [key in Screen]: ScreenInfo;
};

const stackDefaultOptions = (): StackNavigationOptions => ({
  headerShown: false,
});

// Screens
const screens: ScreenLayouts = {
  GetStarted: {
    name: 'GetStarted',
    component: GetStarted,
    options: () => ({
      ...stackDefaultOptions(),
    }),
  },
  ShopBasicInfo: {
    name: 'ShopBasicInfo',
    component: ShopBasicInfo,
    options: () => ({
      ...stackDefaultOptions(),
    }),
  },
};

// Root Navigator
const RootStack = createStackNavigator();
export const RootNavigator = () => {
  useColorScheme();

  return (
    <RootStack.Navigator>
      {[screens.GetStarted, screens.ShopBasicInfo].map(screen => {
        return (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options()}
          />
        );
      })}
    </RootStack.Navigator>
  );
};
