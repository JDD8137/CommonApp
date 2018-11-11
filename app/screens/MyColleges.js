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

import { getUniversities, contains } from "../api/index";
import { Database } from "../models/Database"

export default class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
        application: {}
    }
    Database.loadApplication().then((result) => {
        console.log("loaded");
        if (result[1] != null) {
            console.log("not null");

            var application = result[1];
            getUniversities(15, "")
                .then(universities => {
                    var universityName = "";
                    universities.forEach((uni) => {
                        if (uni.id == application.universityId) {
                            universityName = uni.name
                        }
                    });
                    console.log(universityName);
                    console.log(application.admissionsDecision);
                    this.setState({
                        universityName: universityName,
                        admissionsDecision: application.admissionsDecision
                    });
                })
                .catch(error => {
                });
        }
    })
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
          <View style={{...styles.StatusHeaderContainer, backgroundColor: ""}}>
              <Text style={styles.StatusHeader}>
                  {this.state.universityName}
              </Text>
              <Text style={styles.StatusHeader}>
                  {this.state.admissionsDecision}
              </Text>
          </View>
      </Container>
    );
  }
}