import React, { Component } from "react";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"

import {
  Container
} from 'native-base'
import { strings } from "../config/LanguageTranslations";


export default class PaymentOptions extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: colorPalette.primary,
      shadowRadius: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      color: '#FFFFFF',
    },
    title: strings.editPaymentOptions
    // headerLeft:
    //   <HeaderBarItem to='Home' title='User Profile' />
    // headerRight:
    //   <HeaderBarItem to='FeedbackScreen' title='Feedback' />
  });

  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={colorStyles.primary}>
        
      </Container>
    );
  }
}