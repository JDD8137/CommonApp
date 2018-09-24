import React, { Component } from "react";
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
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"


export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text style={styles.TitleName}>
          FirstName LastName
      </Text>
    );
  }
}