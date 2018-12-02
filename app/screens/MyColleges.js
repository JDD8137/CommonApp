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
    List,
    ListItem,
    Body
} from 'native-base'

import { getUniversities, contains } from "../api/index";
import { Database } from "../models/Database"

export default class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
        submissions: [],
    }
    Database.loadUniversitySubmissions().then((submissions) => {
        getUniversities(15, "")
            .then(universities => {
                submissions.forEach(submission => {
                    submission.universityName = universities.filter(a => {return a.id == submission.universityId})[0].name
                });
                this.setState({
                    submissions: submissions,
                });
            })
            .catch(error => {
            });
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
              <View style={{flex: 1, flexDirection:"column"}}>
              {this.state.submissions.map(submission => {
                  return (
                      <View key={submission.id}>
                          <View style={{...styles.StatusHeaderContainer, backgroundColor: "", marginRight:-20, marginLeft:-20}}>
                              <Text style={styles.StatusHeader}>
                                  {submission.universityName}
                              </Text>
                              <Text style={styles.StatusHeader}>
                                  {submission.admissionsDecision}
                              </Text>
                          </View>
                      </View>
                  )
              })}
              </View>
          </View>
      </Container>
    );
  }
}