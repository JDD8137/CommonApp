import React, { Component } from "react";
import {
  Button,
  Container,
  Content,
  Footer,
  Input,
  Icon,
  Spinner,
  Text,
  View,
} from 'native-base'
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import { Database } from "../models/Database"


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: Database.getUserName()
    }
  }

  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: colorPalette.primary,
      shadowRadius: 0,
      borderBottomWidth: 0,
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
            <View style={styles.TitleContainer}>
                <View style={styles.TitleHeader}>
                    <Text style={styles.TitleName}>
                        {this.state.name}
                    </Text>
                </View>
                {/* <View style={styles.IDContainer}>
                    <Text style={styles.userID}>ID: <Text style={styles.userID}>900555555</Text></Text>
                </View> */}
            </View>

            <View style={styles.GridContainer}>
                <View style={styles.GridColumnContainer}>
                    <View style={styles.GridRowContainer}>
                        <View style={styles.GridComponent}>
                            <Icon type="Ionicons" name="md-paper" style={[colorStyles.primaryText, styles.HomeIcon]} onPress={() => {navigate('EditApplication')}}></Icon>
                            <Text style={styles.GridTitleText}>Applications</Text>
                        </View>
                        <View style={styles.gridComponent}>
                            <Icon
                                type="FontAwesome"
                                name="university"
                                style={[colorStyles.primaryText, styles.UniversityIcon]}
                                onPress={() => {navigate('Search', {isPublic: false})}}>
                            </Icon>
                            <Text style={[styles.GridTitleText]}>Search Universities</Text>
                        </View>
                    </View>

                    <View style={styles.GridRowContainer}>
                        <View style={styles.gridComponent}>
                            <Icon
                                type="MaterialCommunityIcons"
                                name="check" style={[colorStyles.primaryText, styles.HomeIcon]}
                                onPress={() => {navigate('MyColleges')}}>
                            </Icon>
                            <Text style={styles.GridTitleText}>Check Status</Text>
                        </View>
                        <View style={styles.gridComponent}>
                            <Icon 
                                type="MaterialIcons"
                                name="person"
                                style={[colorStyles.primaryText, styles.ProfileIcon]}
                                onPress={() => navigate('Profile')}>
                            </Icon>
                            <Text style={styles.GridTitleText}>My Profile</Text>
                        </View> 
                    </View>
                </View>
            </View>
        </Container>
    );
  }
}