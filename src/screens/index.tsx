import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';
import { ChooseYourLand } from './ChooseYourLand';
import {GetStarted} from './GetStarted';
import {ShopBasicInfo} from './ShopBasicInfo';
import {MakeYourNFT} from './MakeYourNFT';
import {Checkout} from './Checkout';
import {Success} from './Success';

// Describe your screens here
export type Tabs = 'Main' | 'WIP' | 'Settings';
export type Screen = 'GetStarted' | 'ShopBasicInfo' | 'ChooseYourLand' | 'MakeYourNFT' | 'Checkout' | 'Success';

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
  ChooseYourLand: {
    name: 'ChooseYourLand',
    component: ChooseYourLand,
    options: () => ({
      ...stackDefaultOptions(),
    }),
  },
  MakeYourNFT: {
    name: 'MakeYourNFT',
    component: MakeYourNFT,
    options: () => ({
      ...stackDefaultOptions(),
    }),
  },
  Checkout: {
    name: 'Checkout',
    component: Checkout,
    options: () => ({
      ...stackDefaultOptions(),
    }),
  },
  Success: {
    name: 'Success',
    component: Success,
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
      {[screens.GetStarted, screens.ShopBasicInfo, screens.ChooseYourLand, screens.MakeYourNFT, screens.Checkout, screens.Success].map(screen => {
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
