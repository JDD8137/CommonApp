import React, { Component } from "react";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"

import {
  Button,
  Container,
  Content,
  Footer,
  InputGroup,
  Input,
  Icon,
  Spinner,
  Text,
  View,
} from 'native-base'


export default class Status extends Component {
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
    title: 'My Colleges'
  });

  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={colorStyles.primary}>
        <View style={styles.StatusHeaderContainer}>
            <Text style={styles.StatusHeader}>
                UNIVERSITY
            </Text>
            <Text style={styles.StatusHeader}>
                STATUS
            </Text>
        </View>
        
      </Container>
    );
  }
}