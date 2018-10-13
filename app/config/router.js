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

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Filter from '../screens/Filter';
import Settings from '../screens/Settings';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home
  },
  Filter: {
    screen: Filter
  },
  Search: {
    screen: Search
  },
})

export const BottomNav = TabNavigator({
  Logout: {      
    screen: Login,      
    navigationOptions: {
      headerLeft: null,        
      headerTitle: "Logout",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? "exit" : "exit"}
          size={25}
          style={{color: tintColor}}/>
      ),
    }    
  },  
  HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
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
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          type={"MaterialCommunityIcons"}
          name={focused ? "settings-outline" : "settings-outline"}
          size={25}
          style={{color: tintColor}}/>
      ),
      // tabBarOptions: {
      //   activeTintColor: '#000000',
      // }
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
