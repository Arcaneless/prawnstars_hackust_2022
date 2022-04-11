import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { ChooseYourLand } from './ChooseYourLand';
import { GetStarted } from './GetStarted';
import { ShopBasicInfo } from './ShopBasicInfo';
import { MakeYourNFT } from './MakeYourNFT';
import { Checkout } from './Checkout';
import { Home } from './Home';
import { FontAwesome } from '@expo/vector-icons';
import { Search } from './Search';
import { Statistics } from './Statistics';
import { Ionicons } from '@expo/vector-icons';
import { Settings } from './Settings';

// Describe your screens here
export type Tabs = 'Home' | 'Search' | 'Statistics' | 'Settings';
export type Screen =
  | 'GetStarted'
  | 'ShopBasicInfo'
  | 'ChooseYourLand'
  | 'MakeYourNFT'
  | 'Checkout'
  | 'BottomTab';

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

type BottomTabInfo = BaseScreenInfo & {
  options: () => BottomTabNavigationOptions;
};

type BottomTabLayouts = {
  [key in Tabs]: BottomTabInfo;
};

const stackDefaultOptions = (): StackNavigationOptions => ({
  headerShown: false,
});

const tabs: BottomTabLayouts = {
  Home: {
    name: 'Home',
    component: Home,
    options: () => ({
      headerShown: false,
      tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
    }),
  },
  Search: {
    name: 'Search',
    component: Search,
    options: () => ({
      tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />,
    }),
  },
  Statistics: {
    name: 'Statistics',
    component: Statistics,
    options: () => ({
      tabBarIcon: ({ color }) => <Ionicons name="ios-stats-chart" size={24} color={color} />,
    }),
  },
  Settings: {
    name: 'Settings',
    component: Settings,
    options: () => ({
      tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
    }),
  },
};

const RootTab = createBottomTabNavigator();
const BottomTab = () => {
  useColorScheme();

  return (
    <RootTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      {[tabs.Home, tabs.Search, tabs.Statistics, tabs.Settings].map(screen => {
        return (
          <RootTab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options()}
          />
        );
      })}
    </RootTab.Navigator>
  );
};

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
  BottomTab: {
    name: 'BottomTab',
    component: BottomTab,
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
      {[
        screens.GetStarted,
        screens.ShopBasicInfo,
        screens.ChooseYourLand,
        screens.MakeYourNFT,
        screens.Checkout,
        screens.BottomTab,
      ].map(screen => {
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
