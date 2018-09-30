import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Button
} from "react-native";
import {
  Container,
  Content,
  Footer,
  Input,
  Icon,
  Spinner,
} from 'native-base'
import { List, ListItem, SearchBar } from "react-native-elements";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import _ from "lodash";
import { getUniversities, contains } from "../api/index";
//import isPublic from "../api/global"
//import isPrivate from "../api/global"

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

  render() {
    const { navigate } = this.props.navigation;
    return (
    <Container style={colorStyles.primary2}>
                <View style={styles.TitleContainer}>
                    <View style={styles.TitleHeader}>
                        <Text style={styles.TitleName2}>
                            Filter Universities
                        </Text>
                    </View>

                </View>

                <View style={styles.GridContainer}>
                   <View style={styles.gridColumnContainer}>
                   <Button
                       onPress={() => {navigate('Search')}}
                       title="All Universities"
                       color="#841584"
                       accessibilityLabel="No Filter"
                   />
                      <Text style={styles.FilterLabel}>
                          Public or Private
                      </Text>

                      <Button
                        onPress={() => {navigate('Search', {isPublic : true})}}
                        title="Public"
                        color="#841584"
                        accessibilityLabel="Filter Public"
                      />

                      <Button
                        onPress={() => {navigate('Search', {isPrivate : true})}}
                        title="Private"
                        color="#841584"
                        accessibilityLabel="Filter Private"
                      />

                      <Text style={styles.FilterLabel}>
                          Profit or NonProfit
                      </Text>

                        <Button
                        onPress={() => {navigate('Search', {isProfit : true})}}
                        title="Profit"
                        color="#841584"
                        accessibilityLabel="Filter Profit"
                        />
                        <Button
                        onPress={() => {navigate('Search',  {isNonProfit : true})}}
                        title="Non-Profit"
                        color="#841584"
                        accessibilityLabel="Filter Non-Profit"
                        />

                       <Text style={styles.FilterLabel}>
                           Sports Facility
                       </Text>

                        <Button
                        onPress={() => {navigate('Search', {hasSports : true})}}
                        title="Yes"
                        color="#841584"
                        accessibilityLabel="Filter Library"
                        />
                        <Button
                        onPress={() => {navigate('Search',  {hasNoSports : true})}}
                        title="No"
                        color="#841584"
                        accessibilityLabel="Filter No-Library"
                        />

                   </View>
                </View>
    </Container>

    );
  }
}