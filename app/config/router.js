import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Search from '../screens/Search';

export const Root = StackNavigator({
    Login: {
        screen: Login
    },
    Signup: {
    	  screen: Signup
    },
    Home: {
      screen: Home
    },
    Search: {
        screen: Search
    }
}, {
  mode: 'modal',
  headerMode: 'none',
});
