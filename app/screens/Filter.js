import React, { Component } from "react";
import {
  View,
  Text,
  Button
} from "react-native";
import {
  Container,
} from 'native-base'
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import _ from "lodash";
import { strings } from "../config/LanguageTranslations"

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: []
    };
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
    // headerLeft:
    //   <HeaderBarItem to='InfoScreen' title='App info' />,
    // headerRight:
    //   <HeaderBarItem to='FeedbackScreen' title='Feedback' />
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
    <Container style={colorStyles.primary}>
                {/* <View style={styles.TitleContainer}>
                    <View style={styles.TitleHeader}>
                        <Text style={styles.TitleName}>
                            Filter Universities
                        </Text>
                    </View>

                </View> */}

                <View style={styles.GridContainer}>
                   <View style={styles.gridColumnContainer}>
                   <Button
                       onPress={() => {navigate('Search')}}
                       title="All Universities"
                       color="#FFFFFF"
                       accessibilityLabel="No Filter"
                   />
                      <Text style={styles.FilterLabel}>
                          Public or Private
                      </Text>

                      <Button
                        onPress={() => {navigate('Search', {isPublic : true})}}
                        title="Public"
                        color="#FFFFFF"
                        accessibilityLabel="Filter Public"
                      />

                      <Button
                        onPress={() => {navigate('Search', {isPrivate : true})}}
                        title="Private"
                        color="#FFFFFF"
                        accessibilityLabel="Filter Private"
                      />

                      <Text style={styles.FilterLabel}>
                          Profit or NonProfit
                      </Text>

                        <Button
                        onPress={() => {navigate('Search', {isProfit : true})}}
                        title="Profit"
                        color="#FFFFFF"
                        accessibilityLabel="Filter Profit"
                        />
                        <Button
                        onPress={() => {navigate('Search',  {isNonProfit : true})}}
                        title="Non-Profit"
                        color="#FFFFFF"
                        accessibilityLabel="Filter Non-Profit"
                        />

                       <Text style={styles.FilterLabel}>
                           Sports Facility
                       </Text>

                        <Button
                        onPress={() => {navigate('Search', {hasSports : true})}}
                        title="Yes"
                        color="#FFFFFF"
                        accessibilityLabel="Filter Library"
                        />
                        <Button
                        onPress={() => {navigate('Search',  {hasNoSports : true})}}
                        title="No"
                        color="#FFFFFF"
                        accessibilityLabel="Filter No-Library"
                        />

                   </View>
                </View>
    </Container>

    );
  }
}