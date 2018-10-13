/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Root } from './app/config/router';
import {name as appName} from './app.json';

class App extends Component<{}> {
  render() {
    return(
      <Root ref={nav => { this.navigator = nav; }}/>
    );
  }
}

export default App;
AppRegistry.registerComponent(appName, () => App);
