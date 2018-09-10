import React, { Component } from "react";
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Header,
  InputGroup,
  Input,
  Icon,
  Item,
  Left,
  Picker,
  Right,
  Spinner,
  Text,
  View
} from 'native-base'

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <Text>Hello</Text>
      </Container>
    );
  }
}
