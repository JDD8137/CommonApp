import React, { Component } from "react";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"

import {
  Container,
  Text
} from 'native-base'


export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={colorStyles.primary}>
        <Text style={styles.TitleName}>
            Settings Page
        </Text>
      </Container>
    );
  }
}