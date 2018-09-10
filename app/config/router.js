import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import Login from '../screens/Login';
import Signup from '../screens/Signup';

export const Root = StackNavigator({
    Login: {
        screen: Login
    },
    Signup: {
    	  screen: Signup
    },
}, {
  mode: 'modal',
  headerMode: 'none',
});
