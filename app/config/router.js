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
import Filter from '../screens/Filter';
import Applications from '../screens/Applications';
import EditApplication from '../screens/EditApplication';

export const Root = StackNavigator({
    Login: {
        screen: Login
    },
    Signup: {
    	  screen: Signup
    },
    Filter: {
          screen: Filter
    },
    Home: {
      screen: Home
    },
    Search: {
        screen: Search
    },
    Applications: {
        screen: Applications
    },
    EditApplication: {
        screen: EditApplication
    }
}, {
  mode: 'modal',
  headerMode: 'none',
});
