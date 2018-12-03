import React from 'react';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import {
  Icon,
  createMaterialBottomTabNavigator
} from 'native-base'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import { strings } from "../config/LanguageTranslations";

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import MyColleges from '../screens/MyColleges'
import EditProfile from '../screens/EditProfile'
import Notifications from '../screens/Notifications'
import PaymentOptions from '../screens/PaymentOptions'
import EditApplication from "../screens/EditApplication"
import Payment from "../screens/Payment"
import { Authenticator } from '../models/Authenticator'

export const HomeStack = StackNavigator({
  Home: {
    screen: Home
  },
  Search: {
    screen: Search
  },
  MyColleges: {
    screen: MyColleges
  },
  Profile: {
    screen: Profile
  },
  EditProfile: {
    screen: EditProfile
  },
  Notifications: {
    screen: Notifications
  },
  PaymentOptions: {
    screen: PaymentOptions
  },
  EditApplication: {
      screen: EditApplication
  },
  Payment: {
      screen: Payment
  }
})

export const BottomNav = TabNavigator({
  Logout: {
    screen: Login,
    navigationOptions: {
      headerLeft: null,
      headerTitle: strings.logout,
      logout: true,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? "exit" : "exit"}
          size={25}
          style={{color: tintColor}}
          onPress={() => {Authenticator.logout()}}/>
      ),
    }
  },
  HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: strings.home,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          type={"MaterialCommunityIcons"}
          name={focused ? "home" : "home-outline"}
          size={25}
          style={{color: tintColor}}/>
      ),
      // tabBarOptions: {
      //   activeTintColor: '#000000',
      // }
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerLeft: null,
      tabBarLabel: strings.settings,
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          type={"MaterialCommunityIcons"}
          name={focused ? "settings-outline" : "settings-outline"}
          size={25}
          style={{color: tintColor}}/>
      ),
    }
  },
 }, {
   initialRouteName: 'HomeStack',
   swipeEnabled: false
});

export const Root = StackNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  BottomNav: {
    screen: BottomNav,
    navigationOptions: {
      gesturesEnabled: true
    }
  },
  // HomeStack: {
  //   screen: HomeStack,
  // }
},
{
  mode: 'modal',
  headerMode: 'none',
});
