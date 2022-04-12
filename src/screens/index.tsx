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
import { Success } from './Success';
import { Home } from './Home';
import { NewCampaign } from './NewCampaign';
import { FontAwesome } from '@expo/vector-icons';
import { Search } from './Search';
import { Statistics } from './Statistics';
import { Ionicons } from '@expo/vector-icons';
import { Settings } from './Settings';
import { Campaign } from './Campaign';
import { CampaignSuccess } from './CampaignSuccess';

// Describe your screens here
export type Tabs = 'Home' | 'Search' | 'Statistics' | 'Settings';
export type Screen =
  | 'GetStarted'
  | 'ShopBasicInfo'
  | 'ChooseYourLand'
  | 'MakeYourNFT'
  | 'Checkout'
  | 'Success'
  | 'BottomTab'
  | 'NewCampaign'
  | 'Campaign'
  | 'CampaignSuccess';

export type ModalProps = {
  ExampleModal: undefined;
};
export type ScreenProps = {
  Main: undefined;
  Example: ExampleScreenProps;
  Settings: undefined;
} & ModalProps;

// Describe your screens here

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
  Success: {
    name: 'Success',
    component: Success,
    options: () => ({
      ...stackDefaultOptions(),
    }),
  },
  NewCampaign: {
    name: 'NewCampaign',
    component: NewCampaign,
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
  Campaign: {
    name: 'Campaign',
    component: Campaign,
    options: () => ({
      ...stackDefaultOptions(),
    }),
  },
  CampaignSuccess: {
    name: 'CampaignSuccess',
    component: CampaignSuccess,
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
        screens.Success,
        screens.BottomTab,
        screens.NewCampaign,
        screens.Campaign,
        screens.CampaignSuccess,
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
